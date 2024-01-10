import React, { useState, useEffect, useContext, useRef, useCallback } from 'react'
import styles from './Reels.module.scss'
import { context } from '../../Context'
import { IoCloudDownloadOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

/*lib*/
import { download } from '../lib/download'
import random from '../lib/random'

/*Components*/
import ReelsSkeleton from './ReelsSkeleton';

const Reels = () => {
    const controller = useRef();
    const { popularVideo, key } = useContext(context);
    const [ page, setPage ] = useState(1);
    const [ loading, setLoading ] = useState(false);
    const [ posts, setPosts ] = useState([]);
    const [ hasMore, setHasMore] = useState(false);
    const [ display, setDisplay ] = useState(5);
    const observer = useRef();

    const lastCard = useCallback(node => {
        if (loading) return
        if (observer.current) observer.current.disconnect();
        
        observer.current = new IntersectionObserver( entries => {
            if (entries[0].isIntersecting && display >= posts.length-1 && hasMore){console.log('fetching')
                setPage( prev => prev + 1);
                setDisplay( prev => prev + 5)
            }
            else if (entries[0].isIntersecting && display < posts.length-1){console.log('displaying')
                setDisplay(prev => prev + 5)
            }
        });

        if (node) observer.current.observe(node)
    }, [loading, hasMore, display])

    useEffect(() => {
        if (controller.current) controller.current.abort();
        controller.current = new AbortController();
        const signal = controller.current.signal;

        const fetchPhoto = async () => {
            setLoading(true);
            
            try{
                const responseVideo = await fetch(popularVideo + `?&page=${page}&per_page=80`, {
                    headers: {
                        Authorization: key 
                    },
                    signal
                });
                
                const dataVideo = await responseVideo.json();

                setPosts( prev => {
                    return [
                        ...prev, ...dataVideo.videos
                    ]
                });

                if (dataVideo.next_page) setHasMore(true);


            }catch (err){
                console.log(err.message);

            }finally{
                setLoading(false);
            }
        }

        fetchPhoto();
        
        return () => {
            controller.current.abort()
        }
    }, [page]);

  return (
    <div className={styles.wrapper}>
        {posts.length ?
            <div className={styles.grid}>
                {   
                    
                    posts.slice(0, display).map( (el, idx) => {
                        if (idx === display - 1 || idx === posts.length - 1){
                            return <Card card={el} key={idx} ref={lastCard}/>
                        }

                        return <Card card={el} key={idx}  />
                    })
                }
            </div> :
        
            [0,0,0,0,0,0].map((el,idx) => <ReelsSkeleton key={idx}/>)
        }
    </div>
  )
}



const Card = React.forwardRef(({card}, ref) => {
    const { favorites, setFavorites } = useContext(context);
    const [ likes, setLikes ] = useState(random(1000,10000));

    const find = () => {
        const found = favorites.find(el => el.id === card.id);

        if (found) return true
        return false
    }

    const like = () => {
        if (find()){
            setFavorites( prev => {
                const filtered = prev.filter(el => el.id !== card.id);
                setLikes(prev => prev - 1)
                return filtered
            })
        }else{
            setFavorites( prev => {
                setLikes(prev => prev + 1)
                return (
                    [
                        ...prev, card
                    ]
                )
            })
        }
         
    };

    return (
        <div className={styles.section} ref={ref}>
            <div className={styles.cardContainer}>
                <div className={styles.card}>
                    <video muted loop playsInline controls>
                        <source src={card.video_files[0].link}></source>
                    </video>
                </div>
                <div className={styles.icons}>
                    <div className={styles.iconCol}>
                        <FaHeart className={styles.icon} style={{color: find() ? 'red' : 'black'}} onClick={like}/>
                        <p>{likes} Likes</p>
                    </div>
                    <div className={styles.iconCol}>
                        <button onClick={() => download(card.video_files[0].link)}>
                            <IoCloudDownloadOutline className={styles.icon}/>
                        </button>
                        <p>Download</p>
                    </div>
                    <div className={styles.iconCol}>
                        <a href={`https://www.facebook.com/sharer/sharer.php?u=${card.video_files[0].link}`} target='_blank'>
                            <FaFacebookF className={styles.icon}/>
                        </a>
                        <p>Facebook</p>
                    </div>
                    <div className={styles.iconCol}>
                        <a href={`https://twitter.com/intent/tweet?&url=${card.video_files[0].link}`} target='_blank'>
                            <CiTwitter className={styles.icon}/>
                        </a>
                        <p>Twitter</p>
                    </div>
                </div>
            </div>
        </div>
    )
})
export default Reels
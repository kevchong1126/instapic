import React, { useState, useEffect, useContext, useRef, useCallback } from 'react'
import styles from './Reels.module.scss'
import { context } from '../../Context'

/*Components*/
import CardVideo from './CardVideo';
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
            if (entries[0].isIntersecting && display >= posts.length-1 && hasMore){
                setPage( prev => prev + 1);
                setDisplay( prev => prev + 5)
            }
            else if (entries[0].isIntersecting && display < posts.length-1){
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
                            return <CardVideo card={el} key={idx} ref={lastCard}/>
                        }

                        return <CardVideo card={el} key={idx}  />
                    })
                }
            </div> :
        
            [0,0,0,0,0,0].map((el,idx) => <ReelsSkeleton key={idx}/>)
        }
    </div>
  )
}


export default Reels
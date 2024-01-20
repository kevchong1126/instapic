import React, { useEffect, useState, useContext, useRef, useCallback } from 'react'
import styles from './Grid.module.scss'
import { context } from '../../Context';
import { shuffle } from '../lib/shuffle'

/*Components*/
import Card from './Card'
import Video from './Video';
import GridSkeleton from './GridSkeleton';

const Grid = () => {
    const ctrPhoto = useRef();
    const ctrVideo = useRef();
    const { popularPhoto, popularVideo, key } = useContext(context);
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

        if (ctrPhoto.current) ctrPhoto.current.abort();
        if (ctrVideo.current) ctrVideo.current.abort();

        ctrPhoto.current = new AbortController();
        ctrVideo.current = new AbortController();

        const signalPhoto = ctrPhoto.current.signal;
        const signalVideo = ctrVideo.current.signal;

        const fetchPhoto = async () => {
            setLoading(true);
            
            try{
                const responsePhoto = await fetch(popularPhoto + `?per_page=${80}&page=${page}`, {
                    headers: {
                        Authorization: key
                    },
                    signalPhoto
                });

                const responseVideo = await fetch(popularVideo + `?per_page=${30}&page=${page}`, {
                    headers: {
                        Authorization: key 
                    },
                    signalVideo
                });

                const dataVideo = await responseVideo.json();
                const dataPhoto = await responsePhoto.json();
                console.log(dataPhoto)
                setPosts( prev => {
                    const joined = [...dataVideo.videos, ...dataPhoto.photos];
                    const shuffled = shuffle(joined);

                    return [
                        ...prev, ...shuffled
                    ]
                });

                if (dataPhoto.next_page) setHasMore(true);


            }catch (err){
                console.log(err.message);

            }finally{
                setLoading(false);
            }
        }

        fetchPhoto();
        
        return () => {
            ctrPhoto.current.abort()
            ctrVideo.current.abort()
        }

    }, [page]);
    
   
  return (
    <div className={styles.wrapper}>
        {posts.length ?
            <div className={styles.grid}>
                {   
                    
                    posts.slice(0, display).map( (el, idx) => {
                        if (idx === display - 1 || idx === posts.length - 1){
                            if (el.src) return <Card card={el} key={idx} idx={idx+1} ref={lastCard}/>
                            return <Video card={el} key={idx} idx={idx+1} ref={lastCard}/>
                        }

                        if (el.src) return <Card card={el} key={idx} idx={idx+1} />
                        return <Video card={el} key={idx} idx={idx+1} />
                    })
                }
            </div> :
        
            <GridSkeleton />
        }
    </div>
  )
}

export default Grid
import React, { useState, useEffect, useContext, useRef, useCallback } from 'react'
import styles from './PostsPhoto.module.scss'
import { context } from '../../Context'
import { useParams  } from 'react-router-dom';

/*Components*/
import CardPhoto from './CardPhoto';
import ReelsSkeleton from './ReelsSkeleton';

const PostsPhoto = () => {
    const { id } = useParams();
    const { photoId, popularPhoto, key } = useContext(context);
    const [ page, setPage ] = useState(1);
    const [ loading, setLoading ] = useState(false);
    const [ posts, setPosts ] = useState([]);
    const [ hasMore, setHasMore] = useState(false);
    const [ display, setDisplay ] = useState(5);

    const observer = useRef();
    const controller = useRef();
    const controllerId = useRef();

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
        if (controllerId.current) controllerId.current.abort();
        controllerId.current = new AbortController();
        const signal = controllerId.current.signal;

        const fetchPhoto = async () => {

            try{

                const responseId = await fetch(photoId + id, {
                    headers: {
                        Authorization: key 
                    },
                    signal
                });

                const dataId = await responseId.json();

                setPosts( [dataId] );

            }catch (err){
                console.log(err.message);

            }
        };

        fetchPhoto();

        return () => {
            controllerId.current.abort()
        }
    }, [id]);

    useEffect(() => {
        if (controller.current) controller.current.abort();
        controller.current = new AbortController();
        const signal = controller.current.signal;

        const fetchPhoto = async () => {
            setLoading(true);
            
            try{console.log(page)
                const responsePhoto = await fetch(popularPhoto + `?&page=${page}&per_page=80`, {
                    headers: {
                        Authorization: key 
                    },
                    signal
                });
                
                const dataPhoto = await responsePhoto.json();

                setPosts( prev => {
                    return [...prev, ...dataPhoto.photos]
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
            controller.current.abort()
        }
    }, [page, id]);

  return (
    <div className={styles.wrapper}>
        {posts.length ?
            <div className={styles.grid}>
                {   
                    
                    posts.slice(0, display).map( (el, idx) => {
                        if (idx === display - 1 || idx === posts.length - 1){
                            return <CardPhoto card={el} key={idx} ref={lastCard}/>
                        }

                        return <CardPhoto card={el} key={idx}  />
                    })
                }
            </div> :
        
            [0,0,0,0,0,0].map((el,idx) => <ReelsSkeleton key={idx}/>)
        }
    </div>
  )
}


export default PostsPhoto
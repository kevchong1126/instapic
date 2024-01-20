import React, { useState, useContext} from 'react'
import styles from './CardVideo.module.scss'
import { context } from '../../Context'

/*Icons*/
import { IoCloudDownloadOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

/*lib*/
import { download } from '../lib/download'
import random from '../lib/random'

const CardVideo = ({card}, ref) => {
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
}
export default React.forwardRef(CardVideo)
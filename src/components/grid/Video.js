import React, { useContext } from 'react'
import styles from './Video.module.scss'
import { context } from '../../Context';

/*icons*/
import { IoCloudDownloadOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";

/*lib*/
import { download } from '../lib/download';
const Video = ({card, idx}, ref) => {
    const { favorites, setFavorites } = useContext(context);

    const ht = {
        0: styles.cardS,
        1: styles.cardN,
        2: styles.cardL
    };

    const find = () => {
        const found = favorites.find(el => el.id === card.id);

        if (found) return true
        return false
    }

    const like = () => {
        if (find()){
            setFavorites( prev => {
                const filtered = prev.filter(el => el.id !== card.id);

                return filtered
            })
        }else{
            setFavorites( prev => {
                return (
                    [
                        ...prev, card
                    ]
                )
            })
        }
         
    };

  return (
    <div className={`${styles.wrapper} ${ht[idx%3]}`} ref={ref}>
        <div className={styles.imgContainer}>
            <video autoPlay muted loop playsInline controls>
                <source src={card.video_files[0].link} ></source>
            </video>

            <div className={styles.downloadContainer}>
                <FaHeart  className={styles.logo} style={{color: find() ? 'red' : '#d1d1d1'}} onClick={like}/>
                <button onClick={() => download(card.video_files[0].link)}>
                    <IoCloudDownloadOutline className={styles.logo}/>
                </button>
            </div>

        </div>
        <p className={styles.alt}>{card.alt}</p>
        <p className={styles.author}>{card.user.name}</p>
    </div>
  )
}

export default React.forwardRef(Video)
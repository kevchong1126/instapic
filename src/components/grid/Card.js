import React, { useContext, useState } from 'react'
import styles from './Card.module.scss'
import { context } from '../../Context'
import { Link } from 'react-router-dom'

/*icons*/
import { IoCloudDownloadOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";

/*lib*/
import { download } from '../lib/download';

const Card = ({card, idx}, ref) => {
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
            <Link to={'/photo/' + card.id}>
                <img src={card.src.large} alt={card.alt}></img>
            </Link>

            <div className={styles.downloadContainer}>
                <FaHeart className={styles.logo} style={{color: find() ? 'red' : '#d1d1d1'}} onClick={like}/>
                <button onClick={() => download(card.src.large)}>
                    <IoCloudDownloadOutline className={styles.logo}/>
                </button>
            </div>

        </div>
        <p className={styles.alt}>{card.alt}</p>
        <p className={styles.author}>{card.photographer}</p>
    </div>
  )
}

export default React.forwardRef(Card)
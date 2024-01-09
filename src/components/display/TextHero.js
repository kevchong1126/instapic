import React from 'react'
import styles from './TextHero.module.scss'

const TextHero = ({title, caption, btn, img, bg, color}) => {
  return (
    <div className={styles.wrapper} style={{backgroundColor: bg ? bg : '', color: color ? color : ''}}>
        <div className={styles.left}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.caption}>{caption}</p>
            <button className={styles.btn}>
                {btn}
            </button>
        </div>

        <div className={styles.right}>
            <div className={styles.imgContainer}>
                <img src={img} alt={title}></img>
            </div>
        </div>
    </div>
  )
}

export default TextHero
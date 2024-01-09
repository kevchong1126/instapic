import React from 'react'
import styles from './ImgFull.module.scss'

const ImgFull = ({alt, src}) => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.imgContainer}>
            <img src={src} alt={alt}></img>
        </div>
    </div>
  )
}

export default ImgFull
import React from 'react'
import styles from './Box.module.scss'

const Box = ({text, title, color}) => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.box} style={{backgroundColor:color[0], color: color[3]}}>
            <p className={styles.heading}>{title[0]}</p>
            <p className={styles.text}>{text[0]}</p>
        </div>
        <div className={styles.box} style={{backgroundColor:color[1], color: color[4]}}>
            <p className={styles.heading}>{title[1]}</p>
            <p className={styles.text}>{text[1]}</p>
        </div>
        <div className={styles.box} style={{backgroundColor:color[2], color: color[5]}}>
            <p className={styles.heading}>{title[2]}</p>
            <p className={styles.text}>{text[2]}</p>
        </div>
    </div>
  )
}

export default Box
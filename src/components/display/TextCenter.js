import React from 'react'
import styles from './TextCenter.module.scss'

const TextCenter = ({heading, text}) => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.textContainer}>
            <h3 className={styles.heading}>{heading}</h3>
            <p className={styles.text}>
                {text}
            </p>
        </div>
    </div>
  )
}

export default TextCenter
import React from 'react'
import styles from './GridSkeleton.module.scss'


const GridSkeleton = () => {
  return (
    <div className={styles.grid}>
            {
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0].map( (el, idx) => {
                    return (
                        <Card key={idx} idx={idx}/>
                    )
                })
            }
    </div>
  )
}



const Card = ({idx}) => {
    const ht = {
        0: styles.cardS,
        1: styles.cardN,
        2: styles.cardL
    };

    return (
        <div className={`${styles.wrapper} ${ht[idx%3]}`} >
            <div className={styles.imgContainer}>
            

            </div>
            <p className={styles.alt}></p>
            <p className={styles.author}></p>
        </div>
    )
}
export default GridSkeleton
import React from 'react'
import styles from './Explore.module.scss'

/*Components*/
import Reels from '../components/reels/Reels'

const Explore = () => {
  return (
    <div className={styles.container}>
        <div className={styles.content}>
            <Reels />
        </div>
    </div>
  )
}

export default Explore
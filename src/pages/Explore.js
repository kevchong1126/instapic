import React from 'react'
import styles from './Explore.module.scss'

/*Components*/
import Reels from '../components/reels/Reels'
import Suggestion from '../components/navbar/Suggestion'

const Explore = () => {
  return (
    <div className={styles.container}>
        <div className={styles.content}>
            <Suggestion />
            <Reels />
        </div>
    </div>
  )
}

export default Explore
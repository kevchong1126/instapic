import React from 'react'
import styles from './Home.module.scss'

/*Components*/
import Suggestion from '../components/navbar/Suggestion'
import Grid from '../components/grid/Grid'

const Home = () => {

  return (
    <div className={styles.container}>
        <div className={styles.content}>
            <Suggestion />
            <Grid />
        </div>
    </div>
  )
}

export default Home
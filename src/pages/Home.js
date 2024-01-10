import React from 'react'
import styles from './Home.module.scss'

/*Components*/
import Grid from '../components/grid/Grid'

const Home = () => {

  return (
    <div className={styles.container}>
        <div className={styles.content}>
            <Grid />
        </div>
    </div>
  )
}

export default Home
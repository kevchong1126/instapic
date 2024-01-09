import React, { useContext } from 'react'
import styles from './Favorite.module.scss'
import { context } from '../Context'

/*Components*/
import GridFavorite from '../components/grid/GridFavorite'

const Favorite = () => {
    const { favorites } = useContext(context);

  return (
    <div className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Your Likes</h1>
            <p className={styles.results}>{favorites.length} Results</p>
            <GridFavorite />
        </div>
    </div>
  )
}

export default Favorite
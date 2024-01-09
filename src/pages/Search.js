import React, { useContext } from 'react'
import styles from './Search.module.scss'
import { context } from '../Context'
/*Components*/
import GridSearch from '../components/grid/GridSearch'
import { useParams } from 'react-router-dom'

const Search = () => {
    const { query } = useParams();

  return (
    <div className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>{query}</h1>
            
            <GridSearch />
        </div>
    </div>
  )
}

export default Search
import React, { useContext } from 'react'
import styles from './Grid.module.scss'
import { context } from '../../Context'

/*Components*/
import Card from './Card'
import Video from './Video'

const GridFavorite = () => {
    const { favorites } = useContext(context);

    return (
        <div className={styles.wrapper}>
            <div className={styles.grid}>
                {   
                    
                    favorites.map( (el, idx) => {
                        if (el.src) return <Card card={el} key={idx} idx={idx+1} />
                        return <Video card={el} key={idx} idx={idx+1} />
                    })
                }
            </div> 
        </div>
    )
  
}

export default GridFavorite
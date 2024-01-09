import React from 'react'
import styles from './Navbar.module.scss'

/*Components*/
import Top from './Top'
import Bottom from './Bottom'

const Navbar = () => {

  return (
    <div className={styles.container}>
        <div className={styles.content}>
            <Top />
            <Bottom />
        </div>
    </div>
  )
}

export default Navbar
import React from 'react'
import styles from './Bottom.module.scss'
import { Link } from 'react-router-dom'

const Bottom = () => {
  return (
    <div className={styles.wrapper}>
        <ul className={styles.list}>
            <li><Link to={'/wallpaper'}> Wallpaper </Link></li>
            <li><Link to={'/minimalism'}> Minimalism </Link></li>
            <li><Link to={'/render'}> Renders </Link></li>
            <li><Link to={'/nature'}> Nature </Link></li>
            <li><Link to={'/architecture'}> Architecture </Link></li>
            <li><Link to={'/experimental'}> Experimental </Link></li>
            <li><Link to={'/textures'}> Textures </Link></li>
            <li><Link to={'/film'}> Film </Link></li>
            <li><Link to={'/travel'}> Travel </Link></li>
            <li><Link to={'/street photography'}> Street Photography </Link></li>
        </ul>
    </div>
  )
}

export default Bottom
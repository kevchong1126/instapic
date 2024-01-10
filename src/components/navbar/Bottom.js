import React from 'react'
import styles from './Bottom.module.scss'
import { Link, NavLink } from 'react-router-dom'

const Bottom = () => {

  const active = ({isActive}) => {
    return {
      fontWeight: isActive ? 'bold' : 300,
    }
  }

  return (
    <div className={styles.wrapper}>
        <div className={styles.main}>
          <p className={styles.divider}><NavLink to={'/instapic'}  style={active}> For You </NavLink></p>
          <p ><NavLink to={'/explore'} style={active}> Explore </NavLink></p>
        </div>

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
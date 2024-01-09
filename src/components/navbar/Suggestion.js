import React from 'react'
import styles from './Suggestion.module.scss'
import { NavLink } from 'react-router-dom'

const Suggestion = () => {

  const active = ({isActive}) => {
    return {
      fontWeight: isActive ? 600 : 400
    }
  }

  return (
    <div className={styles.wrapper}>
        <div className={styles.labels}>
            <p><NavLink to={'/'} style={active}> For You </NavLink></p>
            <div className={styles.line}></div>
            <p><NavLink to={'/explore'} style={active}> Reels </NavLink></p>
        </div>
    </div>
  )
}

export default Suggestion
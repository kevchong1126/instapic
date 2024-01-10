import React, { useState, useContext } from 'react'
import styles from './Top.module.scss'
import { useNavigate } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom'
import { context } from '../../Context';

const Top = () => {
  const navigate = useNavigate();
  const [ localQuery, setLocalQuery ] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/${localQuery}`);
    setLocalQuery('');
  }

  return (
    <div className={styles.wrapper}>
        <div className={styles.left}>
            <p className={styles.logo}><Link to={'/instapic'}>InstaPic</Link></p>
            <div className={styles.inputContainer}>
                <CiSearch className={styles.icon}/>

                <form onSubmit={submitHandler}>
                  <input className={styles.input} value={localQuery} onChange={el => setLocalQuery(el.target.value)} placeholder='Search for inspiration'></input>
                </form>
            </div>
        </div>

        <ul className={styles.right}>
            <li><Link to={'/favorite'}>Favorites</Link></li>
            <li><Link to={'/advertise'}>Advertise</Link></li>
            <li className={styles.plus}><Link to={'/upgrade'}>InstaPic+</Link></li>
        </ul>
    </div>
  )
}

export default Top
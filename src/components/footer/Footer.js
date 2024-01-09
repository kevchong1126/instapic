import React from 'react'
import styles from './Footer.module.scss'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={styles.container}>
        <div className={styles.content}>
            <div className={styles.top}>
                <ul className={styles.main}>
                    <li className={styles.header}> InstaPic</li>
                    <li>
                        <p>
                            Beautiful, free images gifted by the world’s 
                            most generous community of photographers. Better 
                            than any royalty free or stock photos.
                        </p>
                    </li>
                    <li className={styles.link}><Link to={'/favorite'}> Favorites </Link></li>
                    <li className={styles.link}><Link to={'/advertise'}> Advertise </Link></li>
                    <li className={styles.link}><Link to={'/instapic'}> InstaPic+ </Link></li>
                </ul>
                <ul className={styles.list}>
                    <li className={styles.header}><Link to={'/minimalism'}> Minimalism </Link></li>
                    <li className={styles.link}><Link to={'/renders'}> Renders </Link></li>
                    <li className={styles.link}><Link to={'/nature'}> Nature </Link></li>
                    <li className={styles.link}><Link to={'/architecture'}> Architecture </Link></li>
                    <li className={styles.link}><Link to={'/experimental'}> Experimental </Link></li>
                    <li className={styles.link}><Link to={'/textures'}> Textures </Link></li>
                </ul>
                <ul className={styles.list}>
                    <li className={styles.header}> <Link to={'/wallpapers'}> Wallpapers </Link></li>
                    <li className={styles.link}><Link to={'/hd wallpapers'}> HD Wallpapers </Link></li>
                    <li className={styles.link}><Link to={'/4k wallpapers'}> 4k Wallpapers </Link></li>
                    <li className={styles.link}><Link to={'/iphone wallpapers'}> Iphone Wallpapers </Link></li>
                    <li className={styles.link}><Link to={'/cool wallpapers'}> Cool Wallpapers </Link></li>
                    <li className={styles.link}><Link to={'/live wallpapers'}> Live Wallpapers </Link></li>
                </ul>
            </div>
            <div className={styles.line}></div>

            <div className={styles.bottom}>
                <div className={styles.left}>
                    <p>Privacy Policy</p>
                    <p>Shipping Policy</p>
                    <p>Refund Policy</p>
                </div>
                <div className={styles.right}>
                    <FaInstagram className={styles.logo}/>
                    <FaTwitter className={styles.logo}/>
                    <FaFacebookF className={styles.logo}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
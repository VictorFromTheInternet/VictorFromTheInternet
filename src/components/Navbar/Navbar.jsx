import React, {useState} from 'react'
import styles from './Navbar.module.css'
import {getImageUrl} from '../../utils.js'

console.log(getImageUrl('nav/menuIcon.png'));

export const Navbar = () => {
    return (
    
        <>
        <div className={styles.navbarContainer}>
            <nav className={styles.navbar}>
                <a href="/" className={styles.title} >Victor Arreola</a>                
                <img src={getImageUrl('nav/menuIcon.png')} alt="Menu Icon"  className={styles.menuBtn} />
                <div className={styles.menu}>
                    <ul className={styles.menuItems}>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#experience">Experience</a>
                        </li>
                        <li>
                            <a href="#projects">Projects</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>        
        </>
        
    
    )  
}

export default Navbar;
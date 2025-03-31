import React, {useState} from 'react'
import styles from './Navbar.module.css'
import {getImageUrl} from '../../utils.js'

console.log(getImageUrl('nav/menuIcon.png'));

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
        <div className={styles.navbarContainer}>
            <nav className={styles.navbar}>
                <a href="/" className={styles.title} >Victor Arreola</a>                                
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
                
                <img 
                    src={
                        menuOpen
                        ? getImageUrl('nav/closeIcon.png'):
                        getImageUrl('nav/menuIcon.png')} 
                    alt="Menu Icon" 
                    className={styles.menuBtn} 
                    onClick={()=>setMenuOpen(!menuOpen)}
                />
                
            </nav>

            <div className={`${styles.hamburgerMenuContainer} ${menuOpen ? styles.menuOpen: ''}`}>
                <ul className={styles.hamburgerMenuItems}>
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
        </div>        
        </>
    )  
}

export default Navbar;
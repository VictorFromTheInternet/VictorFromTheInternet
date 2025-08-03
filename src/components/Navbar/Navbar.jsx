import React, {useState} from 'react'
import './Navbar.css'
import {getImageUrl} from '../../utils.js'

console.log(getImageUrl('nav/menuIcon.png'));

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
        <div className="navbar-container">
            <nav className="navbar">
                <a href="/" className="title" >Victor Arreola</a>                                
                <div className="menu">
                    <ul className="menu-items">
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#skills">Skills</a>
                        </li>
                        {/* <li>
                            <a href="#experience">Experience</a>
                        </li> */}
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
                    className="menu-btn" 
                    onClick={()=>setMenuOpen(!menuOpen)}
                />
                
            </nav>

            <div className={`hamburger-menu-container ${menuOpen ? 'menu-open': ''}`}>
                <ul className="hamburger-menu-items">
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#experience">Skills</a>
                    </li>
                    {/* <li>
                        <a href="#experience">Experience</a>
                    </li> */}
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
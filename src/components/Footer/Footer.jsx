import React from 'react'
import styles from './Footer.module.css'
import config from './Footer.config.json'

// icons
import emailIcon from '../../../assets/contact/emailIcon.png'
import linkedinIcon from '../../../assets/contact/linkedinIcon.png' 
import githubIcon from '../../../assets/contact/githubIcon.png'

export const Footer =()=>{
    return(
        <>
            <footer>                                
                <div className={styles.footerMenuContainer}>
                    <h3 className={styles.footerTitle}>
                        Victor Arreola -
                        Full Stack Developer
                    </h3>

                    <ul className={styles.footerMenu}>
                        <li>
                            <a href={config.link_email}>
                                <img src={emailIcon} alt="Email" aria-label="Email" />
                            </a>
                        </li>
                        <li>
                            <a href={config.link_linkedin}>
                                <img src={linkedinIcon} alt="LinkedIn" aria-label="LinkedIn" />
                            </a>
                        </li>
                        <li>
                            <a href={config.link_github}>
                                <img src={githubIcon} alt="Github" aria-label="Github" />
                            </a>
                        </li>                        
                    </ul>
                </div>
            </footer>
        </>
    )
}
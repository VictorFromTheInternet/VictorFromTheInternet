import React from 'react'
import styles from './Footer.module.css'
import config from './Footer.config.json'

// icons
import {getImageUrl} from '../../utils.js'

export const Footer =()=>{
    return(
        <>
            {/* <div className={styles.footerContainer}>
                
            </div> */}
            <div className={styles.footer} id="contact">     
                    <div class={styles.footerMenuContainer}>
                        <a href={config.link_linkedin} aria-label="LinkedIn" title="LinkedIn">
                            <h2 className={styles.footerTitle} >
                                Contact Me                      
                            </h2>
                        </a>                        

                        <ul className={styles.footerMenu}>
                            <li>
                                <a href={config.link_email} aria-label="Email" title="Email">
                                    <img src={getImageUrl('/contact/emailIcon.png')} alt="Email" aria-label="Email" />
                                </a>
                            </li>
                            <li>
                                <a href={config.link_linkedin} aria-label="LinkedIn" title="LinkedIn">
                                    <img src={getImageUrl('/contact/linkedinIcon.png')} alt="LinkedIn" aria-label="LinkedIn" />
                                </a>
                            </li>
                            <li>
                                <a href={config.link_github} aria-label="Github" title="Github">
                                    <img src={getImageUrl('/contact/githubIcon.png')} alt="Github" aria-label="Github" />
                                </a>
                            </li>                        
                        </ul>          
                    </div>                          
                </div>
        </>
    )
}
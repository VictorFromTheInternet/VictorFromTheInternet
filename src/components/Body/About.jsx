import React from 'react'
import styles from './Body.module.css'
import config from './Body.config.json'
import {getImageUrl} from '../../utils.js'

export const About = () =>{
    return(
        <>
            <section id="about" className={styles.mainSection}>
                <div className={styles.sectionCard}>
                    <div className={styles.row}>
                        <div className={`${styles.col} ${styles.aboutMeContainer}`}>
                            <h2 className={styles.hero}>About Me</h2>
                            <p className={styles.xl}>
                                I'm a full-stack developer, driven by a passion for solving technical problems and creating user-focused solutions. 
                            </p>  
                            <div className={styles.contactsContainer}>
                                <ul className={styles.contactsMenu}>
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
                        <div className={styles.col}>

                            <div className={styles.cardText}>
                                <h4>Guaranty Bank & Trust</h4>
                                <h3>Application Developer</h3>
                                <p>Developed and Maintained internal business applications for workflow automation on <em>Unqork</em> and <em>Microsoft Power Apps.</em></p>
                            </div>

                            <div className={styles.cardText}>
                                <h4>Northeast Texas Community College</h4>
                                <h3>A.S. Computer Science</h3>
                                <p>Studied the fundamentals of computer science and theory. The languages within the curriculum were: C++ and Java (D.S. Malik) </p>
                            </div>

                            <div className={styles.cardText}>
                                <h4>Northeast Texas Community College</h4>
                                <h3>Certificate of Competency in Computer Programming</h3>
                                <p>Studied Functional and Object-Oriented programming paradigms as well as Data Structures and Algorithm design: C++ and Java (D.S. Malik) </p>
                            </div>

                        </div>
                    </div>
                             
                </div>                
            </section>
        </>
    )
}
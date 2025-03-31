import React from 'react'
import styles from './Body.module.css'

export const About = () =>{
    return(
        <>
            <section id="about" className={styles.mainSection}>
                <div className={styles.sectionCard}>
                    <h2 className={styles.hero}>About Me</h2>
                    <p className={styles.xl}>
                    I'm a full-stack developer, driven by a passion for solving technical problems and creating user-focused solutions. 
                    </p>           
                </div>                
            </section>
        </>
    )
}
import React from 'react'
import styles from './Body.module.css'

export const About = () =>{
    return(
        <>
            <section id="about" className={styles.mainSection}>
                <div className={styles.sectionCard}>
                    <h2>About Me</h2>
                    <p>
                        I am a passionate Full Stack Developer with a strong foundation in web development technologies. I enjoy creating dynamic and responsive web applications that provide seamless user experiences.
                    </p>
                    <p>
                        My goal is to continuously learn and improve my skills while contributing to exciting projects that make a difference.
                    </p>
                </div>                
            </section>
        </>
    )
}
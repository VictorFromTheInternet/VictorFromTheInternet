import React from 'react'
import styles from './Body.module.css'

export const About = () =>{
    return(
        <>
            <section id="about" className={styles.mainSection}>
                <div className={styles.sectionCard}>
                    <h2>About Me</h2>
                    <p>
                    Howdy! Meet your friendly neighborhood software developer, turning ideas into reality through code. 
                    </p>         

                    <p>
                    Specializing in automating and streamlining business workflows. Driven by a passion for solving technical problems and creating user-focused solutions that make lives easier. 
                    </p>           
                </div>                
            </section>
        </>
    )
}
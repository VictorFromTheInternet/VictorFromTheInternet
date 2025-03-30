import React from 'react'
import styles from './Hero.module.css'

export const Hero = () =>{
    return(
        <>
            <section id="about" className={styles.heroContainer}>
                <div className={styles.sectionCard}>
                    <h2>Victor Arreola</h2>
                    <p>
                    Howdy! Meet your friendly neighborhood software developer.
                    </p>         

                    <p>
                    Specializing in automating and streamlining business workflows. 
                    </p>           
                </div>                
            </section>
        </>
    )
}
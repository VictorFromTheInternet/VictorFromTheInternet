import React from 'react'
import styles from './Hero.module.css'
import {getImageUrl} from '../../utils.js'

export const Hero = () =>{
    return(
        <>
            <section id="hero" className={styles.heroContainer}>
                
                <div className={styles.sectionCard}>
                    <img src={getImageUrl('/hero/hero image v2.png')} alt="" />
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
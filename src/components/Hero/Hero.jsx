import React from 'react'
import styles from './Hero.module.css'
import {getImageUrl} from '../../utils.js'

export const Hero = () =>{
    return(
        <>
            <section id="hero" className={styles.heroContainer}>
                <div className={styles.filter}></div>

                <div className={styles.heroSectionCard}>
                    <img src={getImageUrl('/hero/hero image v2.png')} alt="" />
                    <h1 className={styles.heroTitle}>Victor Arreola</h1>
                    <p className={styles.heroHook}>
                    Howdy! Meet your friendly neighborhood software developer.
                    </p>         

                    <p className={styles.heroDesc}>
                    Specializing in automating and streamlining business workflows. 
                    </p>           
                </div>                
            </section>
        </>
    )
}

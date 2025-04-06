import React, {useState, useEffect} from 'react'
import styles from './Hero.module.css'
import {getImageUrl} from '../../utils.js'

export const Hero = () =>{


    return(
        <>
            <section id="hero" className={styles.heroContainer}>
                <div className={styles.filter}></div>

                <div className={styles.heroSectionCard}>
                    
                    <div className={styles.heroImage} >
                    </div>
                    
                    <h1 className={styles.heroTitle}>Victor Arreola</h1>
                    <p className={styles.heroHook}>
                    Meet your friendly neighborhood software developer 
                    </p>         

                    <p className={styles.heroDesc}>
                    Let's make something together 🤝
                    </p>           
                </div>                
            </section>
        </>
    )
}

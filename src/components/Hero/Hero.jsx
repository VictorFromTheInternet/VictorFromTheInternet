import React, {useState, useEffect} from 'react'
import styles from './Hero.module.css'
import {getImageUrl} from '../../utils.js'

export const Hero = () =>{
    
    const [heroImage, setHeroImage] = useState(getImageUrl('hero/hero image v2.png'));

    useEffect(() => {
        const updateHeroImage = () => {
            if (window.innerWidth < 720) {
                setHeroImage(getImageUrl('hero/hero image mobile v2.png')); // portrait 
            } else {
                setHeroImage(getImageUrl('hero/hero image v2.png')); // landscape
            }
        };

        // Set the initial image based on screen width
        updateHeroImage();

        // Add an event listener to handle screen resizing
        window.addEventListener('resize', updateHeroImage);

        // Cleanup the event listener on component unmount
        return () => window.removeEventListener('resize', updateHeroImage);
    }, []);

    return(
        <>
            <section id="hero" className={styles.heroContainer}>
                <div className={styles.filter}></div>

                <div className={styles.heroSectionCard}>
                    <img src={heroImage} alt="" />
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

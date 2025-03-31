import React from 'react'
import styles from './Body.module.css'

export const Experience = () =>{
    return(
        <>
            <section id="experience" className={styles.mainSection}>
                <div className={styles.sectionCard}>
                    <h2 className={styles.xl}>Experience</h2>
                    <h3 className={`${styles.italic} ${styles.lg}`} > Guaranty Bank & Trust — Application Developer</h3>
                    <p>
                        As a part of the I.T. and Business Systems Management departments, I help to improve several processes for the Bank’s internal functions. Some of the key projects I’ve worked on are:    
                        <ul className={styles.experienceList}>
                            <li>Invoice Processing Workflow 
                                <ul>
                                    <li>JSON to CSV API</li>
                                    <li>Dynamic PDF Generation</li>
                                    <li>CRON task scheduling</li>                                    
                                </ul>                                                                   
                            </li>

                            <li>Customer Change of Address
                                <ul>
                                    <li>Twilio API Integration</li>
                                    <li>Dynamic PDF Generation</li>
                                </ul>
                            </li>

                            <li>Treasury Referrals
                                <ul>
                                    <li>Docusign API Integration</li>
                                    <li>Dynamic PDF Generation</li>
                                </ul>
                            </li>
                        </ul>
                    </p>                                                            
           
                </div>
                               
            </section>
        </>
    )
}
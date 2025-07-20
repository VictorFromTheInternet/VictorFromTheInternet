import React from 'react'
import styles from './Body.module.css'
import config from './Body.config.json'
import {getImageUrl} from '../../utils.js'

export const Projects = () =>{
    return(
        <>
            <section id="projects" className={styles.mainSection}>
                <div className={styles.sectionCard}>
                    <h2 className={styles.xl}>Projects</h2>
                    <div className={styles.projectContainer}>
                        
                        <div className={styles.projectCard}>        
                            <a href={config.link_certificate_generator}>
                                <img src={getImageUrl('projects/project.png')} alt="" />
                                <h3 className={styles.projectImgLabel}>View Project</h3>
                            </a>                                                
                            <h4>Certificate Generator</h4>
                            <p>This is a frontend React application for generating certificates for an A-B honor roll. The export combines multiple pages into one pdf file.</p>
                        </div>
                        <div className={styles.projectCard}>
                            <a href={config.link_qrcode_generator}>
                                <img src={getImageUrl('projects/project.png')} alt="" />
                                <h3 className={styles.projectImgLabel}>View Project</h3>
                            </a>                                                        
                            <h4>QR Code Generator</h4>
                            <p>
                                This is a simple frontend react app for generating qr codes from urls.
                            </p>
                        </div>
                        <div className={styles.projectCard}>   
                            <a href={config.link_color_reducer}>
                                <img src={getImageUrl('projects/project.png')} alt="" />
                                <h3 className={styles.projectImgLabel}>View Project</h3>
                            </a>                                                     
                            <h4>Color Reducer</h4>
                            <p>This project lets the user select colors and create a color-reduced version of the image. It works by creating a new array of rounded pixel values for the output image.</p>
                        </div>
                    </div>      
                </div>                                  
            </section>
        </>
    )
}
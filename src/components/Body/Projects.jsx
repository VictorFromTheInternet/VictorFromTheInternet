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
                            <a href={config.link_invoice_generator}>
                                <img src={getImageUrl('projects/project.png')} alt="" />
                                <h3 className={styles.projectImgLabel}>View Project</h3>
                            </a>                                                
                            <h4>Invoice Generator</h4>
                            <p>A full stack app to generate a templated invoice based on form data. The tools implemented are: Express, Puppeteer & Nunjucks </p>
                        </div>
                        <div className={styles.projectCard}>
                            <a href={config.link_json_to_csv}>
                                <img src={getImageUrl('projects/project.png')} alt="" />
                                <h3 className={styles.projectImgLabel}>View Project</h3>
                            </a>                                                        
                            <h4>JSON to CSV API</h4>
                            <p>
                                A Node.js API for converting JSON into a CSV formatted string, returned as base64 and a data url. 
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
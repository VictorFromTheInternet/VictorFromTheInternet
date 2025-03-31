import React from 'react'
import styles from './Body.module.css'
import {getImageUrl} from '../../utils.js'

export const Projects = () =>{
    return(
        <>
            <section id="projects" className={styles.mainSection}>
                <div className={styles.sectionCard}>
                    <h2>Projects</h2>
                    <div className={styles.projectContainer}>
                        
                        <div className={styles.projectCard}>                            
                            <img src={getImageUrl('projects/project.png')} alt="" />
                            <h4>Color Reducer</h4>
                            <p>This project lets the user select colors and create a color-reduced/rounded version of the image. It works by creating a new array of rounded pixel values for the output image.</p>
                        </div>
                        <div className={styles.projectCard}>                            
                            <img src={getImageUrl('projects/project.png')} alt="" />
                            <h4>Color Reducer</h4>
                            <p>This project lets the user select colors and create a color-reduced/rounded version of the image. It works by creating a new array of rounded pixel values for the output image.</p>
                        </div>
                        <div className={styles.projectCard}>                            
                            <img src={getImageUrl('projects/project.png')} alt="" />
                            <h4>Color Reducer</h4>
                            <p>This project lets the user select colors and create a color-reduced/rounded version of the image. It works by creating a new array of rounded pixel values for the output image.</p>
                        </div>
                    </div>      
                </div>                                  
            </section>
        </>
    )
}
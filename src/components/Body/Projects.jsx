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

                            {/* hosted project */}
                            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"/>
                            </svg>

                            {/* github link */}
                            <svg xmlns="http://www.w3.org/2000/svg" width={100} height={100} viewBox="0 0 256 256">
                                <g  fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none">
                                    <g transform="scale(10.66667,10.66667)">
                                        <path d="M10.9,2.1c-4.6,0.5 -8.3,4.2 -8.8,8.7c-0.5,4.7 2.2,8.9 6.3,10.5c0.3,0.1 0.6,-0.1 0.6,-0.5v-1.6c0,0 -0.4,0.1 -0.9,0.1c-1.4,0 -2,-1.2 -2.1,-1.9c-0.1,-0.4 -0.3,-0.7 -0.6,-1c-0.3,-0.1 -0.4,-0.1 -0.4,-0.2c0,-0.2 0.3,-0.2 0.4,-0.2c0.6,0 1.1,0.7 1.3,1c0.5,0.8 1.1,1 1.4,1c0.4,0 0.7,-0.1 0.9,-0.2c0.1,-0.7 0.4,-1.4 1,-1.8c-2.3,-0.5 -4,-1.8 -4,-4c0,-1.1 0.5,-2.2 1.2,-3c-0.1,-0.2 -0.2,-0.7 -0.2,-1.4c0,-0.4 0,-1 0.3,-1.6c0,0 1.4,0 2.8,1.3c0.5,-0.2 1.2,-0.3 1.9,-0.3c0.7,0 1.4,0.1 2,0.3c1.3,-1.3 2.8,-1.3 2.8,-1.3c0.2,0.6 0.2,1.2 0.2,1.6c0,0.8 -0.1,1.2 -0.2,1.4c0.7,0.8 1.2,1.8 1.2,3c0,2.2 -1.7,3.5 -4,4c0.6,0.5 1,1.4 1,2.3v2.6c0,0.3 0.3,0.6 0.7,0.5c3.7,-1.5 6.3,-5.1 6.3,-9.3c0,-6 -5.1,-10.7 -11.1,-10z"/>
                                    </g>
                                </g>
                            </svg>

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
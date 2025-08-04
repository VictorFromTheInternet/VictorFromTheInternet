import React from 'react'
import './Body.css'
import config from './Body.config.json'
import {getImageUrl} from '../../utils.js'

export const Projects = () =>{
    return(
        <>
            <section id="projects" className="main-section">
                <div className="section-card">
                    <h2 className="xl">Projects</h2>
                    <div className="project-container">
                        
                        <div className="project-card">        
                            <div
                                className="project-image-container" 
                                style={{ backgroundImage: `url(${getImageUrl('projects/certificate_generator.png')})` }}
                            >
                            </div>                                                                             
                            <h4>Certificate Generator</h4>
                            <p>This is a frontend React application for generating certificates for an A-B honor roll. The export combines multiple pages into one pdf file.</p>


                            {/* hosted project */}
                            <a href={config.link_certificate_generator} target="_blank" title="Hosted Project" >                                                            
                                <svg className="hosted-project-icon"  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path  stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"/>
                                </svg>
                            </a> 
                            

                            {/* github link */}
                            <a href={config.link_certificate_generator_source} target="_blank" title="Source Code">                                                          
                                <svg className="source-code-icon" xmlns="http://www.w3.org/2000/svg" width={100} height={100} viewBox="0 0 256 256">
                                    <g  fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none">
                                        <g transform="scale(10.66667,10.66667)">
                                            <path d="M10.9,2.1c-4.6,0.5 -8.3,4.2 -8.8,8.7c-0.5,4.7 2.2,8.9 6.3,10.5c0.3,0.1 0.6,-0.1 0.6,-0.5v-1.6c0,0 -0.4,0.1 -0.9,0.1c-1.4,0 -2,-1.2 -2.1,-1.9c-0.1,-0.4 -0.3,-0.7 -0.6,-1c-0.3,-0.1 -0.4,-0.1 -0.4,-0.2c0,-0.2 0.3,-0.2 0.4,-0.2c0.6,0 1.1,0.7 1.3,1c0.5,0.8 1.1,1 1.4,1c0.4,0 0.7,-0.1 0.9,-0.2c0.1,-0.7 0.4,-1.4 1,-1.8c-2.3,-0.5 -4,-1.8 -4,-4c0,-1.1 0.5,-2.2 1.2,-3c-0.1,-0.2 -0.2,-0.7 -0.2,-1.4c0,-0.4 0,-1 0.3,-1.6c0,0 1.4,0 2.8,1.3c0.5,-0.2 1.2,-0.3 1.9,-0.3c0.7,0 1.4,0.1 2,0.3c1.3,-1.3 2.8,-1.3 2.8,-1.3c0.2,0.6 0.2,1.2 0.2,1.6c0,0.8 -0.1,1.2 -0.2,1.4c0.7,0.8 1.2,1.8 1.2,3c0,2.2 -1.7,3.5 -4,4c0.6,0.5 1,1.4 1,2.3v2.6c0,0.3 0.3,0.6 0.7,0.5c3.7,-1.5 6.3,-5.1 6.3,-9.3c0,-6 -5.1,-10.7 -11.1,-10z"/>
                                        </g>
                                    </g>
                                </svg>
                            </a>                            
                        </div>

                        <div className="project-card">                              
                            <div
                                className="project-image-container" 
                                style={{ backgroundImage: `url(${getImageUrl('projects/Supabase_Login.png')})` }}
                                >
                                {/* <img src={getImageUrl('projects/Supabase Login.png')} alt="" /> */}
                            </div>                            
                            <h4>Supabase Dashboard</h4>
                            <p>
                                This is a demo app for demonstrating email and password authentication using Supabase's SDK. The dashboard is build using GridJS.
                            </p>

                            {/* hosted project */}
                            <a href={config.link_supabase_login} target="_blank" title="Hosted Project" >                                                            
                                <svg className="hosted-project-icon"  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path  stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"/>
                                </svg>
                            </a> 
                            

                            {/* github link */}
                            <a href={config.link_supabase_login_source} target="_blank" title="Source Code">                                                          
                                <svg className="source-code-icon" xmlns="http://www.w3.org/2000/svg" width={100} height={100} viewBox="0 0 256 256">
                                    <g  fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none">
                                        <g transform="scale(10.66667,10.66667)">
                                            <path d="M10.9,2.1c-4.6,0.5 -8.3,4.2 -8.8,8.7c-0.5,4.7 2.2,8.9 6.3,10.5c0.3,0.1 0.6,-0.1 0.6,-0.5v-1.6c0,0 -0.4,0.1 -0.9,0.1c-1.4,0 -2,-1.2 -2.1,-1.9c-0.1,-0.4 -0.3,-0.7 -0.6,-1c-0.3,-0.1 -0.4,-0.1 -0.4,-0.2c0,-0.2 0.3,-0.2 0.4,-0.2c0.6,0 1.1,0.7 1.3,1c0.5,0.8 1.1,1 1.4,1c0.4,0 0.7,-0.1 0.9,-0.2c0.1,-0.7 0.4,-1.4 1,-1.8c-2.3,-0.5 -4,-1.8 -4,-4c0,-1.1 0.5,-2.2 1.2,-3c-0.1,-0.2 -0.2,-0.7 -0.2,-1.4c0,-0.4 0,-1 0.3,-1.6c0,0 1.4,0 2.8,1.3c0.5,-0.2 1.2,-0.3 1.9,-0.3c0.7,0 1.4,0.1 2,0.3c1.3,-1.3 2.8,-1.3 2.8,-1.3c0.2,0.6 0.2,1.2 0.2,1.6c0,0.8 -0.1,1.2 -0.2,1.4c0.7,0.8 1.2,1.8 1.2,3c0,2.2 -1.7,3.5 -4,4c0.6,0.5 1,1.4 1,2.3v2.6c0,0.3 0.3,0.6 0.7,0.5c3.7,-1.5 6.3,-5.1 6.3,-9.3c0,-6 -5.1,-10.7 -11.1,-10z"/>
                                        </g>
                                    </g>
                                </svg>
                            </a>        

                        </div>
                        <div className="project-card">   
                            <div
                                className="project-image-container" 
                                style={{ backgroundImage: `url(${getImageUrl('projects/Color_Reducer.png')})` }}
                            >
                            </div>      
                            <h4>Color Reducer</h4>
                            <p>This full stack project lets the user select colors and create a color-reduced version of an uploaded image. It works by rounding the pixel values to their closest match based on their x/y/z - Red/Green/Blue values on a 3-dimensional plane (utilizing the distance formula).</p>

                            {/* hosted project */}
                            <a href={config.link_color_reducer} target="_blank" title="Hosted Project" >                                                            
                                <svg className="hosted-project-icon"  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path  stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"/>
                                </svg>
                            </a> 
                            

                            {/* github link */}
                            <a href={config.link_color_reducer_source} target="_blank" title="Source Code">                                                          
                                <svg className="source-code-icon" xmlns="http://www.w3.org/2000/svg" width={100} height={100} viewBox="0 0 256 256">
                                    <g  fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none">
                                        <g transform="scale(10.66667,10.66667)">
                                            <path d="M10.9,2.1c-4.6,0.5 -8.3,4.2 -8.8,8.7c-0.5,4.7 2.2,8.9 6.3,10.5c0.3,0.1 0.6,-0.1 0.6,-0.5v-1.6c0,0 -0.4,0.1 -0.9,0.1c-1.4,0 -2,-1.2 -2.1,-1.9c-0.1,-0.4 -0.3,-0.7 -0.6,-1c-0.3,-0.1 -0.4,-0.1 -0.4,-0.2c0,-0.2 0.3,-0.2 0.4,-0.2c0.6,0 1.1,0.7 1.3,1c0.5,0.8 1.1,1 1.4,1c0.4,0 0.7,-0.1 0.9,-0.2c0.1,-0.7 0.4,-1.4 1,-1.8c-2.3,-0.5 -4,-1.8 -4,-4c0,-1.1 0.5,-2.2 1.2,-3c-0.1,-0.2 -0.2,-0.7 -0.2,-1.4c0,-0.4 0,-1 0.3,-1.6c0,0 1.4,0 2.8,1.3c0.5,-0.2 1.2,-0.3 1.9,-0.3c0.7,0 1.4,0.1 2,0.3c1.3,-1.3 2.8,-1.3 2.8,-1.3c0.2,0.6 0.2,1.2 0.2,1.6c0,0.8 -0.1,1.2 -0.2,1.4c0.7,0.8 1.2,1.8 1.2,3c0,2.2 -1.7,3.5 -4,4c0.6,0.5 1,1.4 1,2.3v2.6c0,0.3 0.3,0.6 0.7,0.5c3.7,-1.5 6.3,-5.1 6.3,-9.3c0,-6 -5.1,-10.7 -11.1,-10z"/>
                                        </g>
                                    </g>
                                </svg>
                            </a>   
                        </div>
                    </div>      
                </div>                                  
            </section>
        </>
    )
}
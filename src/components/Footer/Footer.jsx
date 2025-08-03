import React from 'react'
import './Footer.css'
import config from './Footer.config.json'

// icons
import {getImageUrl} from '../../utils.js'

export const Footer =()=>{
    return(
        <>
            {/* <div className="footer-container">
                
            </div> */}
            <div className="footer" id="contact">     
                    <div class="footer-menu-container">
                        <a href={config.link_linkedin} aria-label="LinkedIn" title="LinkedIn">
                            <h2 className="footer-title" >
                                Contact Me                      
                            </h2>
                        </a>                        

                        <ul className="footer-menu">
                            <li>
                                <a href={config.link_email} aria-label="Email" title="Email" target="_blank">
                                    {/* <img src={getImageUrl('/contact/emailIcon.png')} alt="Email" aria-label="Email" /> */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width={100} height={100} style={{padding: '.25rem'}} viewBox="0 0 512 512">
                                                <path  d="M256 352c-16.53 0-33.06-5.422-47.16-16.41L0 173.2V400C0 426.5 21.49 448 48 448h416c26.51 0 48-21.49 48-48V173.2l-208.8 162.5C289.1 346.6 272.5 352 256 352zM16.29 145.3l212.2 165.1c16.19 12.6 38.87 12.6 55.06 0l212.2-165.1C505.1 137.3 512 125 512 112C512 85.49 490.5 64 464 64h-416C21.49 64 0 85.49 0 112C0 125 6.01 137.3 16.29 145.3z"/>
                                            </svg>
                                </a>
                            </li>
                            <li>
                                <a href={config.link_linkedin} aria-label="LinkedIn" title="LinkedIn" target="_blank">
                                    {/* <img src={getImageUrl('/contact/linkedinIcon.png')} alt="LinkedIn" aria-label="LinkedIn" /> */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width={100} height={100} viewBox="0 0 256 256">
                                                <g fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none">
                                                    <g transform="scale(8.53333,8.53333)">
                                                        <path d="M24,4h-18c-1.105,0 -2,0.895 -2,2v18c0,1.105 0.895,2 2,2h18c1.105,0 2,-0.895 2,-2v-18c0,-1.105 -0.895,-2 -2,-2zM10.954,22h-2.95v-9.492h2.95zM9.449,11.151c-0.951,0 -1.72,-0.771 -1.72,-1.72c0,-0.949 0.77,-1.719 1.72,-1.719c0.948,0 1.719,0.771 1.719,1.719c0,0.949 -0.771,1.72 -1.719,1.72zM22.004,22h-2.948v-4.616c0,-1.101 -0.02,-2.517 -1.533,-2.517c-1.535,0 -1.771,1.199 -1.771,2.437v4.696h-2.948v-9.492h2.83v1.297h0.04c0.394,-0.746 1.356,-1.533 2.791,-1.533c2.987,0 3.539,1.966 3.539,4.522z"/>
                                                    </g>
                                                </g>
                                            </svg>
                                </a>
                            </li>
                            <li>
                                <a href={config.link_github} aria-label="Github" title="Github" target="_blank">
                                    {/* <img src={getImageUrl('/contact/githubIcon.png')} alt="Github" aria-label="Github" /> */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width={100} height={100} viewBox="0 0 256 256">
                                                <g  fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none">
                                                    <g transform="scale(10.66667,10.66667)">
                                                        <path d="M10.9,2.1c-4.6,0.5 -8.3,4.2 -8.8,8.7c-0.5,4.7 2.2,8.9 6.3,10.5c0.3,0.1 0.6,-0.1 0.6,-0.5v-1.6c0,0 -0.4,0.1 -0.9,0.1c-1.4,0 -2,-1.2 -2.1,-1.9c-0.1,-0.4 -0.3,-0.7 -0.6,-1c-0.3,-0.1 -0.4,-0.1 -0.4,-0.2c0,-0.2 0.3,-0.2 0.4,-0.2c0.6,0 1.1,0.7 1.3,1c0.5,0.8 1.1,1 1.4,1c0.4,0 0.7,-0.1 0.9,-0.2c0.1,-0.7 0.4,-1.4 1,-1.8c-2.3,-0.5 -4,-1.8 -4,-4c0,-1.1 0.5,-2.2 1.2,-3c-0.1,-0.2 -0.2,-0.7 -0.2,-1.4c0,-0.4 0,-1 0.3,-1.6c0,0 1.4,0 2.8,1.3c0.5,-0.2 1.2,-0.3 1.9,-0.3c0.7,0 1.4,0.1 2,0.3c1.3,-1.3 2.8,-1.3 2.8,-1.3c0.2,0.6 0.2,1.2 0.2,1.6c0,0.8 -0.1,1.2 -0.2,1.4c0.7,0.8 1.2,1.8 1.2,3c0,2.2 -1.7,3.5 -4,4c0.6,0.5 1,1.4 1,2.3v2.6c0,0.3 0.3,0.6 0.7,0.5c3.7,-1.5 6.3,-5.1 6.3,-9.3c0,-6 -5.1,-10.7 -11.1,-10z"/>
                                                    </g>
                                                </g>
                                            </svg>
                                </a>
                            </li>                        
                        </ul>          
                    </div>                          
                </div>
        </>
    )
}
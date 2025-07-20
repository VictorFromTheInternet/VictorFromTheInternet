import React from 'react'
import styles from './Body.module.css'
import config from './Body.config.json'
import {getImageUrl} from '../../utils.js'

export const About = () =>{
    return(
        <>
            <section id="about" className={styles.mainSection}>
                <div className={styles.sectionCard}>
                    <div className={styles.row}>
                        <div className={`${styles.col} ${styles.aboutMeContainer}`}>
                            <h2 className={styles.hero}>About Me</h2>
                            <p className={styles.xl}>
                                I'm a full-stack developer, driven by a passion for solving technical problems and creating user-focused solutions. 
                            </p>  
                            <div className={styles.contactsContainer}>
                                <ul className={styles.contactsMenu}>
                                    <li>
                                        <a href={config.link_email} aria-label="Email" title="Email">
                                            {/* <img src={getImageUrl('/contact/emailIcon.png')} alt="Email" aria-label="Email" /> */}
                                            <svg xmlns="http://www.w3.org/2000/svg" width={100} height={100} style={{padding: '.25rem'}} viewBox="0 0 512 512">
                                                <path fill="#ffffff" d="M256 352c-16.53 0-33.06-5.422-47.16-16.41L0 173.2V400C0 426.5 21.49 448 48 448h416c26.51 0 48-21.49 48-48V173.2l-208.8 162.5C289.1 346.6 272.5 352 256 352zM16.29 145.3l212.2 165.1c16.19 12.6 38.87 12.6 55.06 0l212.2-165.1C505.1 137.3 512 125 512 112C512 85.49 490.5 64 464 64h-416C21.49 64 0 85.49 0 112C0 125 6.01 137.3 16.29 145.3z"/>
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href={config.link_linkedin} aria-label="LinkedIn" title="LinkedIn">
                                            {/* <img src={getImageUrl('/contact/linkedinIcon.png')} alt="LinkedIn" aria-label="LinkedIn" /> */}
                                            <svg xmlns="http://www.w3.org/2000/svg" width={100} height={100} viewBox="0 0 256 256">
                                                <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none">
                                                    <g transform="scale(8.53333,8.53333)">
                                                        <path d="M24,4h-18c-1.105,0 -2,0.895 -2,2v18c0,1.105 0.895,2 2,2h18c1.105,0 2,-0.895 2,-2v-18c0,-1.105 -0.895,-2 -2,-2zM10.954,22h-2.95v-9.492h2.95zM9.449,11.151c-0.951,0 -1.72,-0.771 -1.72,-1.72c0,-0.949 0.77,-1.719 1.72,-1.719c0.948,0 1.719,0.771 1.719,1.719c0,0.949 -0.771,1.72 -1.719,1.72zM22.004,22h-2.948v-4.616c0,-1.101 -0.02,-2.517 -1.533,-2.517c-1.535,0 -1.771,1.199 -1.771,2.437v4.696h-2.948v-9.492h2.83v1.297h0.04c0.394,-0.746 1.356,-1.533 2.791,-1.533c2.987,0 3.539,1.966 3.539,4.522z"/>
                                                    </g>
                                                </g>
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href={config.link_github} aria-label="Github" title="Github">
                                            {/* <img src={getImageUrl('/contact/githubIcon.png')} alt="Github" aria-label="Github" /> */}
                                            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 100 100"><path fill="#fff" d="M50 1C22.39 1 0 23.386 0 51c0 22.092 14.326 40.834 34.193 47.446 2.499.462 3.416-1.085 3.416-2.406 0-1.192-.046-5.131-.067-9.309-13.91 3.025-16.846-5.9-16.846-5.9-2.274-5.779-5.552-7.315-5.552-7.315-4.536-3.104.342-3.04.342-3.04 5.021.353 7.665 5.153 7.665 5.153 4.46 7.644 11.697 5.434 14.55 4.156.449-3.232 1.745-5.437 3.175-6.686-11.106-1.264-22.78-5.552-22.78-24.71 0-5.459 1.953-9.92 5.151-13.42-.519-1.26-2.23-6.346.485-13.233 0 0 4.198-1.344 13.753 5.125 3.988-1.108 8.266-1.663 12.515-1.682 4.25.019 8.53.574 12.526 1.682 9.543-6.469 13.736-5.125 13.736-5.125 2.722 6.887 1.01 11.973.49 13.232 3.206 3.502 5.146 7.962 5.146 13.42 0 19.205-11.697 23.434-22.83 24.671 1.793 1.552 3.39 4.595 3.39 9.26 0 6.69-.057 12.074-.057 13.721 0 1.33.9 2.89 3.434 2.399C85.691 91.819 100 73.085 100 51c0-27.614-22.386-50-50-50"/><path fill="#fff" d="M18.727 72.227c-.11.248-.502.322-.857.152-.363-.163-.567-.502-.45-.751.108-.256.5-.327.862-.156.363.163.57.505.445.755m2.459 2.194c-.238.221-.705.118-1.021-.231-.327-.349-.388-.814-.146-1.04.245-.22.698-.117 1.025.232.328.353.391.816.142 1.04zm1.687 2.808c-.306.213-.807.013-1.117-.432-.306-.444-.306-.977.007-1.191.31-.214.804-.021 1.117.42.306.452.306.985-.007 1.203m2.854 3.252c-.274.302-.858.22-1.285-.192-.437-.403-.56-.975-.284-1.277.277-.303.864-.218 1.294.191.435.403.567.979.275 1.278m3.687 1.098c-.12.391-.682.57-1.249.403-.565-.171-.935-.63-.821-1.026.117-.394.682-.58 1.253-.401.564.17.935.625.818 1.024m4.198.465c.014.413-.466.755-1.06.762-.599.013-1.082-.32-1.089-.726 0-.416.47-.755 1.067-.765.595-.012 1.082.32 1.082.73m4.123-.158c.071.403-.342.816-.932.926-.58.106-1.118-.143-1.192-.541-.072-.413.349-.826.928-.933.591-.103 1.12.14 1.196.548"/></svg> */}
                                            <svg xmlns="http://www.w3.org/2000/svg" width={100} height={100} viewBox="0 0 256 256">
                                                <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth={1} strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit={10} fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none">
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
                        <div className={styles.col}>

                            <div className={styles.cardText}>
                                <h4>Guaranty Bank & Trust</h4>
                                <h3>Application Developer</h3>
                                <p>Developed and Maintained internal business applications for workflow automation on <em>Unqork</em> and <em>Microsoft Power Apps.</em></p>
                            </div>

                            <div className={styles.cardText}>
                                <h4>Northeast Texas Community College</h4>
                                <h3>A.S. Computer Science</h3>
                                <p>Studied the fundamentals of computer science and theory. The languages within the curriculum were: C++ and Java (D.S. Malik) </p>
                            </div>

                            <div className={styles.cardText}>
                                <h4>Northeast Texas Community College</h4>
                                <h3>Certificate of Competency in Computer Programming</h3>
                                <p>Studied Functional and Object-Oriented programming paradigms as well as Data Structures and Algorithm design: C++ and Java (D.S. Malik) </p>
                            </div>

                        </div>
                    </div>
                             
                </div>                
            </section>
        </>
    )
}
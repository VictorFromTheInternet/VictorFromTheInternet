import React from 'react'
import styles from './Body.module.css'
import {getImageUrl} from '../../utils.js'

export const Skills = () =>{
    return(
        <>
            <section id="skills" className={styles.skillsBanner}>
                <div className={styles.skillsContainer}>
                    
                    <img src={getImageUrl('skills/html.png')} alt="" />
                    <img src={getImageUrl('skills/css.png')} alt="" />
                    <img src={getImageUrl('skills/react.png')} alt="" />
                    <img src={getImageUrl('skills/node.png')} alt="" />
                    <img src={getImageUrl('skills/mongodb.png')} alt="" />
                    
                </div>                                
            </section>
        </>
    )
}
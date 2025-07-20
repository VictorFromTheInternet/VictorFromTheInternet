import React from 'react'
import styles from './Body.module.css'
import {getImageUrl} from '../../utils.js'

export const Skills = () =>{
    return(
        <>
            <section id="skills" className={styles.skillsBanner}>
                <div className={styles.skillsContainer}>
                    <img src={getImageUrl('skills/figma.png')} alt="Figma" height="75" width="75" />                    
                    <img src={getImageUrl('skills/tailwind.png')} alt="tailwind" height="75" width="75" />
                    <img src={getImageUrl('skills/react.png')} alt="react" height="75" width="75" />
                    <img src={getImageUrl('skills/node.png')} alt="node" height="75" width="75" />
                    <img src={getImageUrl('skills/mongodb.png')} alt="mongodb" height="75" width="75" />
                    <img src={getImageUrl('skills/postgresql.png')} alt="postgresql" height="75" width="75" />
                    <img src={getImageUrl('skills/javascript.png')} alt="javascript" height="75" width="75" />
                    <img src={getImageUrl('skills/typescript.png')} alt="typescript" height="75" width="75" />
                    <img src={getImageUrl('skills/python.png')} alt="python" height="75" width="75" />
                </div>                                
            </section>
        </>
    )
}
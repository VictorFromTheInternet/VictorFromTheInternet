import React, {useState, useEffect} from 'react'
import './Hero.css'
import {getImageUrl} from '../../utils.js'

export const Hero = () =>{


    return(
        <>
            <section id="hero" className="hero-container">
                <div className="filter"></div>

                <div className="hero-section-card">
                    
                    <div className="hero-image" >
                    </div>
                    
                    <h1 className="hero-title">Victor Arreola</h1>
                    <p className="hero-hook">
                    Meet your friendly neighborhood software developer 
                    </p>         

                    <p className="hero-desc">
                    Let's make something together 🤝
                    </p>           
                </div>                
            </section>
        </>
    )
}

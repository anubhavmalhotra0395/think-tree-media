import React from 'react'
import "./styles/HeroContent.css"
import Vector from "./images/Vector.png"

const HeroContent = () => {
    return (
        <div className='mb-5 w-100 z-2 hero-content-container'>
            <div className='container'>
                <div className='col-5 d-flex flex-column gap-5'><h1 className='text-light hero-content-text'>A gateway to your future</h1>
                    <button className='hero-content-button  py-3 rounded-4'>Know More &nbsp;&nbsp; &nbsp;&nbsp;<span><img src={Vector} className="vector" /></span></button></div>
            </div>
        </div>
    )
}

export default HeroContent
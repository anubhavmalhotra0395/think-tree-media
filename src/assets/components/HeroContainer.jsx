import React from 'react'
import HeroContent from './HeroContent'
import Navbar from './Navbar'
import './styles/HeroContainer.css'

const HeroContainer = () => {
  return (
    <div className='hero-container d-flex flex-column justify-content-between align-items-center px-5'>
        <Navbar />
        <HeroContent />
    </div>
  )
}

export default HeroContainer
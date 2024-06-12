import React from 'react'
import './Hero.css'
import hand from '../assets/hand_icon.png'
import arrow from '../assets/arrow.png'
import arrow1 from '../assets/hero_image.png'


const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-left'>
        <h2>Arival time only</h2>
        <div>
          <div className='hero-icon'>
            <p>New</p>
            <img src={hand} alt="" />
          </div>
          <p>collection</p>
          <p>for every one</p>
        </div>
        <div className='hero-latest-btn'>
          <div> latest Collection </div>
          <img src={arrow} alt="" />
        </div>
      </div>
      <div className='hero-right'></div>
      <img src={arrow1} alt="" />


    </div>
  )
}

export default Hero
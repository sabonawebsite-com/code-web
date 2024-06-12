

import React from 'react'
import './Hero.css'
const Hero = () => {
  const joinUs = () => {
    document.querySelector('h3').innerHTML = 'thanks for join us';
  }

  return (
    <div className='hero'>
      <div className='hero-text'>
        <h1>Education is good for all </h1>
        <p>Education is essentially the process of acquiring knowledge, skills, and values. It can be formal, happening in places like schools and universities, or informal, through life experiences. The overall goal is to prepare a person for life, including their role in society and the workforce. Here's a breakdown of some key aspects of education:</p>
        <h3 className='btn1' onClick={joinUs}>click here to join→</h3>
      </div>

    </div>
  )
}

export default Hero
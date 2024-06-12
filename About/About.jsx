import React from 'react'
import './About.css'
import AboutImage from '../../assets/about.png'
import play from '../../assets/play-icon.png'
const About = () => {
  return (
    <div className='About'>
      <div className='about-left'>
        <img src={AboutImage} alt="" className='about-img' />
        <img src={play} alt="" className='play-icon' />
      </div>
      <div className='About-right'>
        <h3>About university</h3>
        <h2>Education is a lifelong process that starts from a young age and continues throughout a person's life.</h2>
        <p>Knowledge: This refers to factual information and understanding of concepts across various subjects.</p>
        <p>Skills: These are the abilities to put knowledge into practice, such as problem-solving, critical thinking, communication, and collaboration.</p>
        <p>Values: These are the principles and beliefs that guide a person's actions and behavior. Education can help instill values like fairness, honesty, and responsibility.</p>
      </div>
    </div>
  )
}

export default About
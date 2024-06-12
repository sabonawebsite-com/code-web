import React from 'react'
import './Offers.css'
import goPic from '../assets/exclusive_image.png'
const Offers = () => {
  return (
    <div className='offers'>
      <div className='offers-left'>
        <h1>Exclusise</h1>
        <h1>Offers for you</h1>
        <p>ONLY ON BEST SELLERS</p>
        <button>Check now</button>
      </div>
      <div className='offers-right'>
        <img src={goPic} alt="" />
      </div>
    </div>
  )
}

export default Offers
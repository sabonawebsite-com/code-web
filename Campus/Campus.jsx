import React from 'react'
import './Campus.css'
import gallerPic from '../../assets/gallery-1.png'
import gallerPic1 from '../../assets/gallery-2.png'
import gallerPic2 from '../../assets/gallery-3.png'
import gallerPic3 from '../../assets/gallery-4.png'
const Campus = () => {
  return (
    <div className='campus'>
      <div className='gallery'>
        <img src={gallerPic} alt="" />
        <img src={gallerPic1} alt="" />
        <img src={gallerPic2} alt="" />
        <img src={gallerPic3} alt="" />
        <img src={gallerPic} alt="" />
        <img src={gallerPic1} alt="" />
        <img src={gallerPic2} alt="" />
        <img src={gallerPic3} alt="" />
      </div>
      <button className='btn dark-color'>See more Here→</button>
    </div>
  )
}

export default Campus
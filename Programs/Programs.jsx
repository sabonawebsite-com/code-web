import React from 'react'
import './Programs.css'
import pro1 from '../../assets/program-1.png'
import pro2 from '../../assets/program-2.png'
import pro3 from '../../assets/program-3.png'
import pro4 from '../../assets/program-icon-1.png'
import pro5 from '../../assets/program-icon-2.png'
import pro6 from '../../assets/program-icon-3.png'

const Programs = () => {
  return (
    <div className='programs' id='program'>
      <div className='program'>
        <img src={pro1} alt="" />
        <div className='caption'>
          <img src={pro4} alt="" />
          <p>graduation Degree</p>
        </div>
      </div>
      <div className='program'>
        <img src={pro2} alt="" />
        <div className='caption'>
          <img src={pro5} alt="" />
          <p>Master Degree</p>
        </div>
      </div>
      <div className='program'>
        <img src={pro3} alt="" />
        <div className='caption'>
          <img src={pro6} alt="" />
          <p>post graduation</p>
        </div>
      </div>
    </div>
  )
}

export default Programs
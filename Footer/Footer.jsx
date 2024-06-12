import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer'>
      <p>&copy;{new Date().getFullYear()}Sabona All Right Reserved</p>
      <ul>
        <li>Terms Of resualts</li>
        <li>Privacy Policy</li>
      </ul>
    </div>
  )
}

export default Footer
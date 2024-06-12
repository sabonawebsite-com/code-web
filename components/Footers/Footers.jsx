import React from 'react'
import './Footers.css'
import logo_footers from '../assets/logo_big.png'
import logo_ins from '../assets/instagram_icon.png'
import logo_what from '../assets/whatsapp_icon.png'
import logo_penr from '../assets/pintester_icon.png'
const Footers = () => {
  return (
    <div className='footers'>
      <div className='logo-footers'>
        <img src={logo_footers} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className='footer-link'>
        <li>Company</li>
        <li>product</li>
        <li>offers</li>
        <li>About</li>
        <li>contact Us</li>
      </ul>
      <div className='social-icon'>
        <div className='footers-conteners'>
          <img src={logo_ins} alt="" />
        </div>
        <div className='footers-conteners'>
          <img src={logo_what} alt="" />
        </div>
        <div className='footers-conteners'>
          <img src={logo_penr} alt="" />
        </div>

      </div>
      <div className='copyRight'>
        <hr />
        <p>&copy; {new Date().getFullYear()} All right Reserved</p>
      </div>
    </div>
  )
}

export default Footers
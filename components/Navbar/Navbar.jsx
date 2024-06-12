import React, { useState } from 'react'
import './Navbar.css'
import logoPic from '../assets/logo.png'
import carIco from '../assets/cart_icon.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
  const [menu, setMenu] = useState("shop")
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logoPic} alt="" className='cart-logo' />
        <p>Shopper</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={() => setMenu("shop")}>
          <Link to='/' style={{ textDecoration: 'none' }}>Shop</Link> {menu === "shop" ? <hr /> : <></>}</li>
        <li onClick={() => setMenu("mens")}
        ><Link to='/mens' style={{ textDecoration: 'none' }}>men</Link> {menu === "mens" ? <hr /> : <></>}</li>

        <li onClick={() => setMenu("womens")}><Link to='/womens' style={{ textDecoration: 'none' }}>women</Link> {menu === "womens" ? <hr /> : <></>}</li>

        <li onClick={() => setMenu("kids")}><Link to='/kids' style={{ textDecoration: 'none' }}>Kid</Link> {menu === "kids" ? <hr /> : <></>}</li>
      </ul>
      <div className='login-cart-img'>
        <button><Link to='/login' style={{ textDecoration: 'none' }}>login</Link></button>
        <p><Link to='/mens1' style={{ textDecoration: 'none' }}>girls</Link></p>
        {/* <li><Link to='/login' style={{ textDecoration: 'none' }}>menss</Link></li> */}
        <Link to='/mens'>meeeeeeeeeee</Link>
        <Link to='/cart' onClick={() => setMenu("cart")}><img src={carIco} alt="" /></Link>
        <div className='cart-counter'>0</div>
      </div>
    </div>
  )
}

export default Navbar
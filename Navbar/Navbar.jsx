

import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/bruico.jpeg';
import menu from '../../assets/menu-icon.png';
import { Link, animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
  const [mobile, setMobile] = useState(false)
  const toggleMenu = () => {
    mobile ? setMobile(false) : setMobile(true)
  }

  const handleScrollClick = (sectionName) => {
    scroll.scrollTo(sectionName);
  };

  return (
    <nav className='contener'>
      <img src={logo} alt="" className='logo' />
      <ul className={mobile ? "" : "hide-moble-menu"}> {/* Use an unordered list for better styling */}
        <img src={menu} alt="" className='menu-icon' onClick={toggleMenu} />
        <li>
          <Link
            activeClass="active" // Add active styling for clicked link
            to="hero" // Link target section ID
            spy={true} // Enables smooth scroll behavior
            smooth={true} // Ensures smooth scrolling
            offset={0} // Adjusts scroll position to avoid overlapping elements
            onClick={() => handleScrollClick('hero')} // Triggers scroll on click
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="program"
            spy={true}
            smooth={true}
            offset={-260}
            onClick={() => handleScrollClick('program')}
          >
            Program
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="About"
            spy={true}
            smooth={true}
            offset={-150}
            onClick={() => handleScrollClick('About')}
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="testmonials"
            spy={true}
            smooth={true}
            offset={-260}
            onClick={() => handleScrollClick('testmonials')}
          >
            Testimonials
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-260}
            onClick={() => handleScrollClick('contact')}
          >
            <button className='btn'>Contact Us
            </button>
          </Link>
        </li>
      </ul>

    </nav>
  );
};

export default Navbar;

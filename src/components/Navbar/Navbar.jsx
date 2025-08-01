import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BsScissors } from 'react-icons/bs'

import images from '../../constants/images';

import { Link } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className='app__navbar'>
      <div className="rounded-background"></div>

      <ul className="app__navbar-links items-left">
        <li><Link to="/" className='p__opensans'>Home</Link></li>
        <li><Link to="/about" className='p__opensans'>About</Link></li>
        <li><Link to="/services" className='p__opensans'>Services</Link></li>
      </ul>



      <div className='app__navbar-logo'>
        <a href="#hero">
          <img className='nav__desktop-logo' src={images.heroLogoKK} alt="app logo" />
          <img className='nav__mobile-logo' src={images.logoKK} alt="app logo" />
        </a>
      </div>

      <ul className='app__navbar-links items-right'>
        <li><Link to="/gallery" className='p__opensans'>Gallery</Link></li>
        <li><Link to="/booking" className='p__opensans'>Booking</Link></li>
        <li><Link to="/contact" className='p__opensans'>Contact</Link></li>
      </ul>

      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu className='burger__menu flex__center' onClick={() => setToggleMenu(true)}/>

        {toggleMenu && (
        <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
          <BsScissors fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
          <ul className='app__navbar-smallscreen_links' onClick={() => setToggleMenu(false)}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/booking">Booking</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        )}

      </div>
    </nav>
  )
}

export default Navbar;
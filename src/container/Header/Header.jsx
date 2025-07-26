import React from 'react';

import { images } from '../../constants';
import { SubHeading} from '../../components';

import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    
    <div className='app__wrapper_info'>
      <SubHeading title="blurryVision.kk" />
      <h1 className='app__header-h1'>Welcome to Kingz Kutz</h1>
      <p className="p__opensans"  style={{ margin: '1rem 0 2rem 0'}}> 
          Your Kingdom for premier barber services. 
          Serving royalty, one cut at a time.
          Experience the Epitome of Grooming Excellence. 
          Elevate Your Style with Our Regal Barber Craftsmanship. 
          Embrace Distinction at Every Trim.
      </p>
      <a href="#services" type='button' className='custom__button'>Explore Services</a>
      
    </div>

    <div className="app__wrapper_img">
      <img src={ images.header } alt="welcome" />
    </div>

  </div>
);

export default Header;

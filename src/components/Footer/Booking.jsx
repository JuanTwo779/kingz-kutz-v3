import React from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Booking.css';
import images from '../../constants/images';

const Booking = () => (
  <div className="app__booking">
    <div className="app__booking-heading">
      <SubHeading title="Booking" />
      <h1 className="headtext__cormorant">Book now on Square Up</h1>
      <p className="p__opensans">
        Click the Square Up icon below and follow the steps to book. 
        Alternatively, watch 
        our instagram <a href="https://www.instagram.com/p/CwNl54Zo0Xs/" target="__blank" rel='noreferrer' className='app__anchor-tag'>video</a> for 
        a more detailed guide to make a booking.
      </p>
    </div>

    <div className="app__booking-button flex__center">
      <a href="https://squareup.com/appointments/book/4cyym80cme1iz6/LWNY4K7BJ50XV/services" target="_blank" rel='noreferrer'>
        <img src={images.squareUp} alt="squareUp"/>
      </a>
    </div>
  </div>
);

export default Booking;
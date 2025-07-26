import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import { Carousel } from 'react-bootstrap';
import './Barber.css';

const Barber = () => (
  <div className="app__bg_2 app__wrapper section__padding" id='barber'>
    
    <div className="app__wrapper_img app__wrapper_img-reverse">
      {/* <img src={images.barber} alt='Barber' /> */}
      <Carousel className='app__carousel'>
        <Carousel.Item>
          <img src={images.Kelvin2} alt='First slide' className='d-block w-100' />
        </Carousel.Item>
        <Carousel.Item>
          <img src={images.barber} alt='Second slide' className='d-block w-100' />
        </Carousel.Item>
        <Carousel.Item>
          <img src={images.Kelvin3} alt='Third slide' className='d-block w-100' />
        </Carousel.Item>
      </Carousel>
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Glen Waverley Barber" />
      <h1 className="headtext__cormorant">About Me</h1>

      <div className="app__barber-content">
        <div className="app__barber-content_quote">
          <p className="p__opensans"> 
            Welcome to an exceptional grooming experience. As a dedicated professional barber based in Glen Waverley, 
            I take pride in delivering precision haircuts and personalised grooming services. 
            Combining my background in civil engineering and expertise as a skilled massage therapist, 
            I bring a unique touch to the grooming industry, ensuring each client leaves with a fresh look 
            tailored to their style.
          </p>
        </div>
          
        <p className="p__opensans"> 
        Discover a space where men's grooming meets craftsmanship and style. <a href='#booking' className='app__anchor-tag'>Book</a> your appointment today and indulge in a top-tier grooming experience.
        </p>
      </div>

      <div className="app__barber-sign">
        <p>Kelvin Kuek</p>
      </div>
    </div>
  </div>
);

export default Barber;
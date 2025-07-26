import React from 'react';
import { GiQueenCrown } from "react-icons/gi";

import './Hero.css';

const Hero = () => (
     <div className='app__hero-2' id='hero'>
          <div className='app__hero-info'>
               <GiQueenCrown />
               <h1 className='app__hero-h1'>Serving royalty</h1>
               <h2 className='p__cormorant app__hero-h2'>One cut at a time</h2>
            
          </div>
     </div>
);

export default Hero;
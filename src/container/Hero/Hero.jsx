import { Link } from "react-router-dom";
import { GiQueenCrown } from "react-icons/gi";
import Intro from "../Intro/Intro";

import './Hero.css';
import Rules from "../Rules/Rules";

const Hero = () => (
     <>
          <div className='app__hero-2' id='hero'>
               <div className='app__hero-info'>
                    <GiQueenCrown />
                    <h1 className='app__hero-h1'>Serving royalty</h1>
                    <h2 className='app__hero-h2'>One cut at a time</h2>
                    <h3 className='app__hero-h3'><Link to='/booking' className="custom__button">Book Now</Link></h3>
               </div>
          </div>
     </>
);

export default Hero;
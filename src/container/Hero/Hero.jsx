import { Link } from "react-router-dom";
import { GiQueenCrown } from "react-icons/gi";
import { images } from "../../constants";

import './Hero.css';
import Reviews from "../Reviews/Reviews";


const Hero = () => (
     <>
          <div className='app__hero-2' id='hero'>
               <div className='app__hero-info'>
                    <img src={images.crownWhite} alt="crown logo" />
                    {/* <GiQueenCrown /> */}
                    <h1 className='app__hero-h1'>Serving royalty</h1>
                    <h2 className='app__hero-h2'>One cut at a time</h2>
                    <h3 className='app__hero-h3'><Link to='/booking' className="custom__button">Book Now</Link></h3>
               </div>
          </div>
          <div>
               {/* <script src="https://static.elfsight.com/platform/platform.js" async></script> */}
               <Reviews />
          </div>
     </>
);

export default Hero;
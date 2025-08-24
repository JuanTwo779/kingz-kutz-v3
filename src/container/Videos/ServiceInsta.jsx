import React, { useState } from 'react';

import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { serviceVid, images } from '../../constants';

import { SubHeading } from '../../components';

import './Videos.css';

const ServiceInsta = () => {
     const [playVideo, setPlayVideo] = useState(false);
     const vidRef = React.useRef();

     const handleVideo = () => {
     setPlayVideo((prevPlayVideo) => !prevPlayVideo);

     if (playVideo) {
          vidRef.current.pause();
     } else {
          vidRef.current.play();
     }
     }

  return (
     <div className='app__bg app__wrapper section__padding'>
          <div className='app__wrapper_img app__wrapper_img-reverse'>
               <div className='video__container'>
                    <video src={ serviceVid } 
                         type="video/mp4"
                         loop
                         controls={false}
                         ref={vidRef}
                         className='app__insta_vid'
                         poster={images.serviceVidThumb}
                    />

                    <div className="app__video-overlay">
                         <div className='app__video-overlay_radius ' onClick={handleVideo}>
                              {playVideo ? <BsPauseFill fontSize={30}/> : <BsFillPlayFill fontSize={30}/>}
                         </div>
                    </div>
               </div>

          </div>
          <div className='app__wrapper_info'>
               <SubHeading title="Discover Our Craft"/>
               <h1 className="headtext__cormorant">Your Cut, Your Experience</h1>
               <p className="p__opensans">We’ve refreshed our prices and added something special for students. 
                    Watch the full video to discover the challenge — complete it, and you’ll score a reward.</p>
          </div>
     </div>
  );
};

export default ServiceInsta;

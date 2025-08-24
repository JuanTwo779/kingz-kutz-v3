import React, { useState } from 'react';

import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { images, vid } from '../../constants';

import './Intro.css';

const Intro = () => {
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
    <div className='intro__video' id='intro'>
      <video 
        src={ vid } 
        type="video/mp4"
        loop
        controls={false}
        ref={vidRef}
        poster={images.thumbnail}
      />

      <div className="intro__video-overlay flex__center">
        <div 
          className='intro__video-overlay_radius flex__center'
          onClick={handleVideo}
        >
          {playVideo 
          ? <BsPauseFill fontSize={30}/>
          : <BsFillPlayFill fontSize={30}/>}

        </div>
      </div>
    </div>
  )
}

export default Intro;

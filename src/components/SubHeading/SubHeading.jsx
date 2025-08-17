import React from 'react';

import { images } from '../../constants';

const SubHeading = ({ title }) => (
  <div >
    <p className="p__cormorant">{ title }</p>
    <img src={images.scissors1} alt="scissors" className='subheading__img' />
  </div>
);

export default SubHeading;

import React from 'react';

import { images } from '../../constants';

const SubHeading = ({ title }) => (
  <div style={ {marginBottom: '0.5rem'} }>
    <p className="p__cormorant">{ title }</p>
    <img src={images.scissorsSec} alt="scissors" className='subheading__img' />
  </div>
);

export default SubHeading;

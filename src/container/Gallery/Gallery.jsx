import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Gallery.css';
import { Carousel } from 'react-bootstrap';

import Assistant from '../Assistant/Assistant';

const Gallery = () => {

  return (
    <>
      <div className="app__bg app__wrapper section__padding" id='photos'>

        <div className="app__wrapper_info">
          <SubHeading title="Follow us on Instagram" />
          <h1 className="headtext__cormorant">Photo Gallery</h1>
          <p className="p__opensans" style={{ margin: '0.5rem 0 2rem 0' }}>Explore our gallery of expertly crafted styles. Each cut showcases precision, creativity, and attention to detail, offering inspiration for your next look. Discover the style that best reflects your individuality.</p>
          <a href="https://www.instagram.com/blurryvision.kk/" target='_blank' rel="noreferrer" type="button" className="custom__button" style={{ textDecoration: 'none' }}>@blurryvision.kk</a>
        </div>
        
        <div className="app__wrapper_img app__wrapper_img">
            <Carousel className='gallery__carousel'>
              {[images.gallery1, images.gallery2, images.gallery3, images.gallery4, images.gallery5, 
              images.gallery6, images.gallery7, images.gallery8, images.gallery9, images.gallery10, 
              images.gallery11, images.gallery12].map((image) => (
                <Carousel.Item>
                  <img src={image} alt='Men mens fade haircut trim undercut textured fringe' className='d-block w-100 gallery_carousel-img' />
                </Carousel.Item>
              ))}
            </Carousel>
        </div>
      
      </div>
      
      <Assistant />
    </>
  );
};

export default Gallery;
import { SubHeading } from '../../components';
import { images } from '../../constants';
import { Carousel } from 'react-bootstrap';
import Intro from '../Intro/Intro'
import './Barber.css';

const Barber = () => (
  <>
    
    <div className="app__bg_2 app__wrapper barber__padding" id='barber'>
      
      <div className="app__wrapper_img app__wrapper_img-reverse">
        {/* <img src={images.barber} alt='Barber' /> */}
        <Carousel className='app__carousel'>
          <Carousel.Item>
            <img src={images.Kelvin4} alt='First slide' className='d-block w-100' />
          </Carousel.Item>
          <Carousel.Item>
            <img src={images.Kelvin2} alt='Second slide' className='d-block w-100' />
          </Carousel.Item>
          <Carousel.Item>
            <img src={images.barber} alt='Third slide' className='d-block w-100' />
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="app__wrapper_info">
        {/* <SubHeading title="" /> */}
        <h1 className="headtext__cormorant">About Me</h1>

        <div className="app__barber-content">
          <div className="app__barber-content_quote">
            <p className="p__opensans"> 
              Hi, I’m Kelvin, a professional barber based in Glen Waverley, dedicated to delivering precision haircuts and personalised grooming experiences. With a background in civil engineering and training as a massage therapist, I combine technical precision with a relaxing touch to create styles that are sharp, comfortable, and tailored to you.
            </p>
          </div>
          <p className="p__opensans"> 
            At Kingz Kutz, every appointment is more than just a haircut, it’s an experience where craftsmanship meets style. Whether you’re after a fresh fade, a classic cut, or a modern look, I’ll ensure you leave looking your best and feeling confident.
          </p>
            
          <p className="p__opensans"> 
          Ready for your next cut? <a href='#booking' className='app__anchor-tag'>Book</a> today and discover the difference.
          </p>
        </div>

        <div className="app__barber-sign">
          <p>Kelvin Kuek</p>
        </div>
      </div>
    </div>

    <Intro />

  </>
);

export default Barber;
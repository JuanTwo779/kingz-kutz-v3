import { SubHeading } from '../../components';
import './Booking.css';
import images from '../../constants/images';

const BookingTile = () => (
  <div className="booking__tile app__bg section__padding">
    <div className="app__booking-heading">
      <SubHeading title="Ready When You Are" />
      <h1 className="headtext__cormorant">Book now on Square Up</h1>
      <p className="p__opensans">
        Click the Square Up icon below and follow the steps to book. 
        Alternatively, watch 
        our instagram <a href="https://www.instagram.com/p/CwNl54Zo0Xs/" target="__blank" rel='noreferrer' className='app__anchor-tag'>video</a> for 
        a more detailed guide to make a booking.
      </p>
    </div>

    <div className="app__booking-button flex__center">
      <a href="https://squareup.com/appointments/book/4cyym80cme1iz6/LWNY4K7BJ50XV/services" target="_blank" rel='noreferrer'>
        <img src={images.squareUp} alt="squareUp"/>
      </a>
      
    </div>
  </div>
);

export default BookingTile;
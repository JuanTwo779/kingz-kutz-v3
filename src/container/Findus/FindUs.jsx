import { SubHeading } from '../../components';

const FindUs = () => (
  <div className='app__bg_2 app__wrapper section__padding' id='contact'>
    
  <div className="app__wrapper_info">
    <SubHeading title='Contact' />
    <h1 className='headtext__cormorant' style={{ marginBottom: '1rem' }}>Find Us</h1>
  
    <div className='app__wrapper-content'>
      <p className='p__opensans'>
        Our location is at <strong>7 Garwain Parade, Glen Waverley</strong>. Feel free to use the provided map for accurate directions.
      </p>

      <div style={{ margin: '2rem 0' }}>
        <p className='p__cormorant' style={{ color: 'var(--color-white)', marginBottom: '1rem' }}>Working Hours</p>
        <p className='p__opensans' style={{ marginBottom: '5px' }}>Mon-Fri: 9:00 am - 6:00 pm</p>
        <p className='p__opensans'>Weekends: 10:00 am - 5:00 pm</p>
      </div>
    </div>
  </div>


    <div className="app__wrapper_img">
      <iframe title='googleMaps'  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3149.595027141005!2d145.17886914004498!3d-37.86976513735702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad63faad3e955b1%3A0x5d20c64bf007dd35!2s7%20Garwain%20Parade%2C%20Glen%20Waverley%20VIC%203150!5e0!3m2!1sen!2sau!4v1687779372615!5m2!1sen!2sau" width="500" height="500" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" ></iframe>
      {/* style={{filter: "invert(90%)"}} */}
    </div>
  </div>
);

export default FindUs;

import { FiFacebook, FiInstagram, FiLinkedin } from 'react-icons/fi';
import { SiLinktree } from "react-icons/si";

import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer app__bg_2" id='booking'>

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">7 Garwain Parade, Glen Waverley</p>
        <p className="p__opensans">@blurryvision.kk</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.heroLogoKK} alt="footer_logo" />
        <p className="p__opensans"></p>
        <img src={images.scissors} className='footer__scissor' alt='scissors' />
        <div className="app__footer-links_icons">
          <SiLinktree 
            onClick={(e) => { e.preventDefault();
            window.open('https://linktr.ee/kelvinski?fbclid=PAZXh0bgNhZW0CMTEAAacGvcfiV6EjekMJV5nEPtHgoMHWT5YtL0h_2MrOlUsLJfAtMRfhoNlIdiceCg_aem_aRu7LRREfbK7GisFAyjWKQ').focus();
            }}
          />
          <FiFacebook 
            onClick={(e) => { e.preventDefault();
            window.open('https://m.facebook.com/p/Kingz-Kutz-100070774514816/','_blank').focus();
            }}
          />
          <FiInstagram 
            onClick={(e) => { e.preventDefault();
            window.open('https://www.instagram.com/blurryvision.kk/','_blank').focus();
            }} 
          />
          <FiLinkedin 
            onClick={(e) => { e.preventDefault();
              window.open('https://au.linkedin.com/in/kelvin-kuek-0100361b4','_blank').focus();
              }} 
          />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Mon-Fri: 9:00 am - 6:00 am</p>
        <p className="p__opensans">Weekends: 10:00 am - 5:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">© 2023 Kingz Kutz. All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;
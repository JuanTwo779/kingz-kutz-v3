import { ServiceItem } from '../../components';
import { data, images } from '../../constants';
import Assistant from '../Assistant/Assistant';
import ServiceInsta from '../Videos/ServiceInsta';
import './Services.css';

const Services = () => (
  <>
    <div className="app__services app__bg_2 flex__center section__padding" id="services">
      <div className="app__services-title">
        <h1 className="headtext__cormorant mt-4">Services</h1>
      </div>

      <div className="app__services-service">
        <div className="app__services-service_cuts  flex__center">
          <p className="app__services-service_heading">Cuts</p>
          <div className="app__services_service_items">
            {data.services.map((service, index) => (
              <ServiceItem key={service.title + index} title={service.title} price={service.price} tags={service.comment}/>
            ))}
          </div>
        </div>

        <div className="app__services-service_img">
          <img src={images.service2} alt="service__img" />
        </div>

        <div className="app__services-service_caveats  flex__center">
          <p className="app__services-service_heading">Caveats</p>
          <div className="app__services_service_items">
            {data.caveats.map((caveat, index) => (
              <ServiceItem key={caveat.title + index} title={caveat.title} price={caveat.price} tags={caveat.comment}/>
            ))}
          </div>
        </div>
      </div>
    </div>
    <ServiceInsta />
  </>
);

export default Services;

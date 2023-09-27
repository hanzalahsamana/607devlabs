import React from 'react';
import webImage from '../../images/services/web-design.svg';
import graphicImage from '../../images/services/graphic-design.svg';
import appImage from '../../images/services/ui-ux.svg';


function ServicesSection() {
  return (
    <div className='container'>
      <div className="section bg-light py-3 py-lg-5 px-2 px-lg-4" id="services">
        <div className="container-narrow">
          <div className="text-center mb-5">
            <h2 className="marker marker-center">Our Services</h2>
          </div>
          <div className="text-center">
            <p className="mx-auto mb-3" style={{ maxWidth: '800px' }}>
              Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar solutions without functional solutions.
            </p>
          </div>
          <div className="row py-3">
            <div className="col-md-4 text-center mb-3" data-aos="fade-up" data-aos-delay="100">
              <div className="bg-white border rounded-circle d-inline-block p-2">
                <img className="p-2" src={webImage} width="96" height="96" alt="web design" />
              </div>
              <div className="bg-white border rounded p-3 mt-n4">
                <div className="h5 mt-3">Web Design</div>
                <p className="text-small">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a className="btn btn-link" href="#contact">
                  Learn More<i className="fas fa-arrow-right ms-1"></i>
                </a>
              </div>
            </div>

            <div className="col-md-4 text-center mb-3" data-aos="fade-up" data-aos-delay="200">
              <div className="bg-white border rounded-circle d-inline-block p-2">
                <img className="p-2" src={graphicImage} width="96" height="96" alt="graphic design" />
              </div>
              <div className="bg-white border rounded p-3 mt-n4">
                <div className="h5 mt-3">Graphic Design</div>
                <p className="text-small">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a className="btn btn-link" href="#contact">
                  Learn More<i className="fas fa-arrow-right ms-1"></i>
                </a>
              </div>
            </div>

            <div className="col-md-4 text-center mb-3" data-aos="fade-up" data-aos-delay="300">
              <div className="bg-white border rounded-circle d-inline-block p-2">
                <img className="p-2" src={appImage} width="96" height="96" alt="ui-ux" />
              </div>
              <div className="bg-white border rounded p-3 mt-n4">
                <div className="h5 mt-3">UI/UX</div>
                <p className="text-small">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a className="btn btn-link" href="#contact">
                  Learn More<i className="fas fa-arrow-right ms-1"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default ServicesSection;

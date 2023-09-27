import React from 'react';
import image from '../../images/illustrations/building_websites.svg';

function Header() {
  return (
    <header>
      <div className="cover bg-light">
        <div className="container px-2">
          <div className="row">
            <div className="col-lg-6">
              <div className="mt-5 pt-lg-5 aligns-content-wrap">
                <h1 className="intro-title marker" data-aos="fade-left" data-aos-delay="50">Your Success is Our Mission. </h1>
                <p className="lead fw-normal mt-4" data-aos="fade-up" data-aos-delay="100">Leverage agile frameworks to provide a robust synopsis for high-level overviews. Iterative approaches to corporate strategy foster collaborative thinking.</p>
                <div className="mt-3" data-aos="fade-up" data-aos-delay="200">
                  <a className="btn btn-primary shadow-sm mt-1 me-2" href="#contact">Get Started <i className="fas fa-arrow-right ms-1"></i></a>
                  <a className="btn btn-outline-secondary mt-1" data-bigpicture={{ "ytSrc": "aqz-KE-bpKQ" }} href="#services">Our Services <i class="fas fa-solid fa-rocket ms-1"></i></a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 p-3 pe-lg-0" data-aos="fade-left" data-aos-delay="100">
              <img className="pt-2 img-fluid" src={image} alt="hello" />
            </div>
          </div>
        </div>
      </div>
      <div className="wave-bg"></div>
    </header>
  );
}

export default Header;

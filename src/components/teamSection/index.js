import React from 'react';
import teamIcon from '../../images/illustrations/creative-team.svg'
function TeamSection() {
  return (
    <div className='container'>
 <div className="row py-3 py-lg-5">
      {/* Left Column */}
      <div className="col-lg-6 col-md-5 px-3" data-aos="fade-zoom-in" data-aos-delay="50" data-aos-easing="ease-in-back">
        <img className="my-3 img-fluid" src={teamIcon} alt="creative-team" />
      </div>
      {/* Right Column */}
      <div className="col-lg-6 col-md-7 px-2" data-aos="zoom-in" data-aos-delay="100">
        <div className="h3 mb-2">Our <strong>Expert Team</strong> delivers the best result.</div>
        <p className="text-secondary mb-2">
          Lorem ipsum dolor sit amet consectetur adipiscing elit primis rutrum, nullam tempor malesuada laoreet tempus blandit pretium etc.
        </p>
        <div>
          {/* Skills Section */}
          <div className="py-1">
            <div className="d-flex text-small fw-bolder"><span className="me-auto">Web Design</span><span>90%</span></div>
            <div className="progress my-1">
              <div className="progress-bar bg-secondary" role="progressbar" data-aos="zoom-in-right" data-aos-delay="300" data-aos-anchor=".skills-section" style={{ width: '90%' }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
          <div className="py-1">
            <div className="d-flex text-small fw-bolder"><span className="me-auto">Mobile App</span><span>90%</span></div>
            <div className="progress my-1">
              <div className="progress-bar bg-success" role="progressbar" data-aos="zoom-in-right" data-aos-delay="400" data-aos-anchor=".skills-section" style={{ width: '90%' }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
          <div className="py-1">
            <div className="d-flex text-small fw-bolder"><span className="me-auto">Graphic Design</span><span>80%</span></div>
            <div className="progress my-1">
              <div className="progress-bar bg-secondary" role="progressbar" data-aos="zoom-in-right" data-aos-delay="500" data-aos-anchor=".skills-section" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
          <div className="py-1">
            <div className="d-flex text-small fw-bolder"><span className="me-auto">Digital Marketing</span><span>75%</span></div>
            <div className="progress my-1">
              <div className="progress-bar bg-success" role="progressbar" data-aos="zoom-in-right" data-aos-delay="600" data-aos-anchor=".skills-section" style={{ width: '75%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
          {/* End Skills Section */}
        </div>
      </div>
    </div>
    </div>
   
  );
}

export default TeamSection;

import React from 'react';
import teamIcon from '../../images/illustrations/creative-team.svg'
function TeamSection() {

  return (
    <div className='container'>
      <div className="row py-3 py-lg-5">
        <div className="col-lg-6 col-md-5 px-3" data-aos="fade-zoom-in" data-aos-delay="50" data-aos-easing="ease-in-back">
          <img className="my-3 img-fluid" src={teamIcon} alt="creative-team" />
        </div>
        <div className="col-lg-6" data-aos="zoom-in" data-aos-delay="100">
          <div className="h3 mb-2">Our <strong>Expert Team</strong> delivers the best result.</div>
          <p className="text-secondary mb-2">
            Lorem ipsum dolor sit amet consectetur adipiscing elit primis rutrum, nullam tempor malesuada laoreet tempus blandit pretium etc.
          </p>
          <p className="text-secondary mb-2">
            Lorem ipsum dolor sit amet consectetur adipiscing elit primis rutrum, nullam tempor malesuada laoreet tempus blandit pretium etc.
            Lorem ipsum dolor sit amet consectetur adipiscing elit primis rutrum, nullam tempor malesuada laoreet tempus blandit pretium etc.
            Lorem ipsum dolor sit amet consectetur adipiscing elit primis rutrum, nullam tempor malesuada laoreet tempus blandit pretium etc.

          </p>
        </div>
        
      </div>
    </div>

  );
}

export default TeamSection;

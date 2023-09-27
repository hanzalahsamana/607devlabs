import React from 'react';
import devImage from '../../images/illustrations/development.svg';

function WorkWithUs() {
  return (
    <div className="section pt-3 pt-lg-5 px-2 px-lg-4" id="about">
      <div className="container-narrow">
        <div className="text-center mb-4">
          <h2 className="marker marker-center">Work With Us</h2>
        </div>
        <div className="text-center">
          <p className="mx-auto mb-3" style={{ maxWidth: '800px' }}>
            Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="row py-3">
          <div className="col-md-6 col-lg-3 text-center" data-aos="fade-up" data-aos-delay="100">
            <div className="border rounded p-3 bg-light mb-3">
              <div className="text-center text-secondary display-3"><i className="bi bi-palette-fill"></i></div>
              <h3 className="h4 mt-2">Design</h3>
              <p className="text-small">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores..</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 text-center" data-aos="fade-up" data-aos-delay="200">
            <div className="border rounded p-3 bg-light mb-3">
              <div className="text-center text-secondary display-3"><i className="bi bi-chat-left-text-fill"></i></div>
              <h3 className="h4 mt-2">Feedback</h3>
              <p className="text-small">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores..</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 text-center" data-aos="fade-up" data-aos-delay="300">
            <div className="border rounded p-3 bg-light mb-3">
              <div className="text-center text-secondary display-3"><i className="bi bi-calendar-check-fill"></i></div>
              <h3 className="h4 mt-2">Execution</h3>
              <p className="text-small">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores..</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 text-center" data-aos="fade-up" data-aos-delay="400">
            <div className="border rounded p-3 bg-light mb-3">
              <div className="text-center text-secondary display-3"><i className="bi bi-people-fill"></i></div>
              <h3 className="h4 mt-2">Support</h3>
              <p className="text-small">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores..</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row py-3 py-lg-5">
          <div className="col-lg-6 col-md-5 px-3 order-md-last" data-aos="fade-zoom-in" data-aos-delay="50" data-aos-easing="ease-in-back">
            <img className="my-3 img-fluid" src={devImage} alt="development" />
          </div>
          <div className="col-lg-6 col-md-7 px-2" data-aos="zoom-in" data-aos-delay="100">
            <div className="h3 mb-2">Let our <strong>Agile Team</strong> understand and serve your needs.</div>
            <p className="text-secondary mb-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula auctor ornare. Nulla non ullamcorper tellus. Vestibulum pulvinar eros nec tortor maximus, iaculis rutrum nibh mollis.
            </p>
            <div class="row">
              <div class="col-lg-6 mb-2">
                <div class="border border-3 rounded px-2 py-2 d-flex align-items-center">
                  <div class="badge bg-success me-2"><i class="fas fa-check"></i></div>
                  <div class="text-secondary fw-bold">Active Colloboration</div>
                </div>
              </div>
              <div class="col-lg-6 mb-2">
                <div class="border border-3 rounded px-2 py-2 d-flex align-items-center">
                  <div class="badge bg-success me-2"><i class="fas fa-check"></i></div>
                  <div class="text-secondary fw-bold">On-Schedule Delivery</div>
                </div>
              </div>
              <div class="col-lg-6 mb-2">
                <div class="border border-3 rounded px-2 py-2 d-flex align-items-center">
                  <div class="badge bg-success me-2"><i class="fas fa-check"></i></div>
                  <div class="text-secondary fw-bold">After Sales Services</div>
                </div>
              </div>
              <div class="col-lg-6 mb-2">
                <div class="border border-3 rounded px-2 py-2 d-flex align-items-center">
                  <div class="badge bg-success me-2"><i class="fas fa-check"></i></div>
                  <div class="text-secondary fw-bold">24x7 On-Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkWithUs;

import React from 'react';
import logo from '../../images/newlogo.png'

function Footer() {
  return (
    <footer className="py-5 px-2 bg-light" id="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-12 mb-3">
            <div className="mb-3 aligns-content-wrap">
              <div className="h4"><img src={logo} className='logo-image'/> 607devlabs</div>
              <p className="text-muted">Leverage agile frameworks to provide a robust synopsis for high level overviews.</p>
              <div className="social-nav">
                <nav role="navigation">
                  <ul className="nav text-light">
                    <li className="nav-item"><a className="nav-link" href="https://twitter.com/templateflip" title="Twitter"><i className="fab fa-twitter"></i><span className="menu-title sr-only">Twitter</span></a></li>
                    <li className="nav-item"><a className="nav-link" href="https://www.facebook.com/templateflip" title="Facebook"><i className="fab fa-facebook"></i><span className="menu-title sr-only">Facebook</span></a></li>
                    <li className="nav-item"><a className="nav-link" href="https://www.instagram.com/templateflip" title="Instagram"><i className="fab fa-instagram"></i><span className="menu-title sr-only">Instagram</span></a></li>
                    <li className="nav-item"><a className="nav-link" href="https://www.linkedin.com/" title="LinkedIn"><i className="fab fa-linkedin"></i><span className="menu-title sr-only">LinkedIn</span></a></li>
                    <li className="nav-item"><a className="nav-link" href="https://www.behance.net/templateflip" title="Behance"><i className="fab fa-behance"></i><span className="menu-title sr-only">Behance</span></a></li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="text-small text-muted aligns-content-wrap">
              <div className="mb-1">&copy; Copyright <strong>607devlabs</strong>. All rights reserved.</div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 mb-3 aligns-content-wrap">
            <div className="text-uppercase mb-2">Services</div>
            <div className="nav flex-column"><a className="nav-link px-0" href="#!">Design</a><a className="nav-link px-0" href="#!">Development</a><a className="nav-link px-0" href="#!">Branding</a><a className="nav-link px-0" href="#!">Marketing</a></div>
          </div>
          <div className="col-lg-2 col-md-6 mb-3 aligns-content-wrap">
            <div className="text-uppercase mb-2">Products</div>
            <div className="nav flex-column"><a className="nav-link px-0" href="#!">Services</a><a className="nav-link px-0" href="#!">Portfolio</a><a className="nav-link px-0" href="#!">Team</a><a className="nav-link px-0" href="#!">Pricing</a></div>
          </div>
          <div className="col-lg-2 col-md-6 mb-3 aligns-content-wrap">
            <div className="text-uppercase mb-2">About</div>
            <div className="nav flex-column"><a className="nav-link px-0" href="#!">About</a><a className="nav-link px-0" href="#!">Contact</a><a className="nav-link px-0" href="#!">Terms</a><a className="nav-link px-0" href="#!">Privacy</a></div>
          </div>
          <div className="col-lg-2 col-md-6 mb-3 aligns-content-wrap">
            <div className="text-uppercase mb-2">Contact Us</div>
            <div className="text-small">
              <address>
                568, Hill Road<br />
                New York, NY 50032<br />
                United States
              </address>
              {/* <div className="mb-1"><strong>Phone:</strong><br />+0718-111-0011</div> */}
              <div className="mb-1"><strong>Email:</strong><br />607devlabs@gmail.com</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import React, { useState, useEffect } from 'react';
import logo from '../../images/newlogo.png'
function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`bg-light`}>
      <nav className={`navbar navbar-expand-lg navbar-light bg-light my-new-class ${isScrolled ? 'fixed-top' : ''}`} id="header-nav" role="navigation">
        <div className="container">
          <a className="link-dark navbar-brand site-title mb-0" href="#"><img src={logo} className='logo-image'/> 607DevLabs</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto me-2">
              <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
              <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
            </ul>
            <a className="btn btn-primary" href="#contact">Get Started</a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

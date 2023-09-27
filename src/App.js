
import React, { useEffect } from 'react';
import Header from './components/header';
import Navbar from './components/Navbar';
import WorkWithUs from './components/workWithUs';
import TeamSection from './components/teamSection';
import ServicesSection from './components/serviceSection';
import ContactSection from './components/contactSection';
import Footer from './components/footer';
import AOS from 'aos';
import './App.css';
import 'aos/dist/aos.css';
import './css/bootstrap.css';
import './css/main.css';
import './css/bootstrap.min.css';
import './css/font-awesome/css/all.css'
import './css/bootstrap-icons/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Header />
      <WorkWithUs />
      <TeamSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;

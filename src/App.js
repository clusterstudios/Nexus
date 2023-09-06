import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ShoppingSection from './components/ShoppingSection';
import Footer from './components/Footer';
import porscheImage from './images/porsche.jpg';
import ContactSection from './components/ContactSection';
import logo from './images/logo-titlev2.png';
import SliderText from './components/SliderText'; 

function App() {
  return (
    <div className="App">
      <header className="header">
      <a href="/" target="_blank" rel="noopener noreferrer">
          <img src={logo} alt="Logo" className="logo" style={{ height: '75px' }} />
      </a>
      {/*<h1 className="title">Nexus Car Rentals</h1>*/}
        <NavBar />
      </header>

      <div className="slider">
        <img src={porscheImage} alt="Porsche" className="slider-image" />
        <div className="slider-content">
          <h1>Luxury & Exotic Car Rental In Kelowna, BC</h1>
          <button className="availability-btn">Check Availability</button>
        </div>
      </div>
      
      <SliderText /> 
      <ShoppingSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;

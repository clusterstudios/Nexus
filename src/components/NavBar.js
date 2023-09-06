import React, { useState } from 'react';

function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className={`navbar-icons ${isNavOpen ? 'open' : ''}`}>
      <div className="navbar-toggle" onClick={toggleNav}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className={`navbar-list ${isNavOpen ? 'open' : ''}`}>
        <a href="/">Home</a>
        <a href="/fleet">Fleet</a>
        <a href="/rates">Rates</a>
        <a href="/luxurypackages">Luxury Packages</a>
        <a href="/faq">FAQ</a>
        <a href="#contact" className="contact-link">Contact</a>
        <a href="https://instagram.com/yourusername">
          <i className="icon instagram-icon fab fa-instagram"></i>
        </a>
        <a href="mailto:youremail@example.com">
          <i className="icon email-icon fas fa-envelope"></i>
        </a>
        <a href="tel:+1234567890">
          <button className="phone-button">Call Us: (123) 456-7890</button>
        </a>
      </div>
    </nav>
  );
}

export default NavBar;

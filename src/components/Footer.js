import React from 'react';
import { FaInstagram, FaEnvelope } from 'react-icons/fa';
function Footer() {
    return (
        <div className="footer">
        <h3 className="footer-title">Nexus Luxury Car Rentals</h3>
            <p>Business Hours: 9:00 AM - 6:00 PM</p>
            <p>Address: 1234 Street Name, City, ZIP</p>
            <p>Phone: (123) 456-7890</p>
            
            <div className="footer-icons">
                <a href="https://instagram.com/nexusluxurycarrentals" target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={24} />
                </a>
                <a href="mailto:info@nexusluxurycarrentals.com" target="_blank" rel="noopener noreferrer">
                    <FaEnvelope size={24} />
                </a>
            </div>
        </div>
    );
}

export default Footer;

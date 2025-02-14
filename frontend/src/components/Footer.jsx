import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Get In Touch</h3>
          <p><i className="fas fa-map-marker-alt"></i> 123 Street, New York, USA</p>
          <p><i className="fas fa-phone"></i> +1234567890</p>
          <p><i className="fas fa-envelope"></i> info@example.com</p>
        </div>
        <div className="footer-section">
          <h3>Popular Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/plans">Washing Plans</Link></li>
            <li><Link to="/points">Washing Points</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
        <div className="footer-copyright">
          <p>&copy; 2023 Car Wash Management System</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

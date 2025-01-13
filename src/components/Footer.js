import React from 'react';
import '../assets/styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-item">
          <i className="footer-icon message-icon"></i>
          <h3>ABOUT RESTAURANT</h3>
          <p>Enjoy a wonderful cafe dining experience</p>
        </div>
        <div className="footer-item">
          <i className="footer-icon phone-icon"></i>
          <h3>LET'S TALK</h3>
          <p>Phone: 1-800-222-000</p>
          <p>Fax: 1-800-222-002</p>
        </div>
        <div className="footer-item">
          <i className="footer-icon email-icon"></i>
          <h3>BOOK A TABLE</h3>
          <p>info@yourdomain.com</p>
          <p>hr@yourdomain.com</p>
        </div>
        <div className="footer-item">
          <i className="footer-icon location-icon"></i>
          <h3>CONTACT US</h3>
          <p>Lorem ipsum consectetur adipiscing onsectetur.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

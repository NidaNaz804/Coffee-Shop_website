import React from 'react'
import { BiCoffeeTogo } from "react-icons/bi";
import { LuFacebook } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa6";
import { LuTwitter } from "react-icons/lu";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-item">
            <div className="logo-container">
              <BiCoffeeTogo className="icon" />
              <span className="footer-title">Beans Bliss</span>
            </div>
            <p className="footer-description">
              Crafting perfect moments, one cup at a time. Visit us for an unforgettable coffee experience.
            </p>
          </div>
          
          <div className="footer-item">
            <h3 className="footer-subtitle">Hours</h3>
            <ul className="footer-list">
              <li>Monday - Thursday: 9am - 11pm</li>
              <li>Friday - Saturday: 9am - 12am</li>
              <li>Sunday: 9am - 11pm</li>
            </ul>
          </div>
          
          <div className="footer-item">
            <h3 className="footer-subtitle">Connect With Us</h3>
            <div className="social-icons">
              <a href="#" className="social-icon">
                <LuFacebook className="icon" />
              </a>
              <a href="#" className="social-icon">
                <FaInstagram className="icon" />
              </a>
              <a href="#" className="social-icon">
                <LuTwitter className="icon" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© 2025 | Beans Bliss Coffee House. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
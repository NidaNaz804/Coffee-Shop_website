import React from 'react';
import coffee from '../assets/coffee5.png';

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        {/* Text Section */}
        <div className="hero-text">
          <h3 className="hero-subtitle">Welcome to Beans Bliss___</h3>
          <h1 className="hero-title">
            Experience Artisanal <span className="highlight-text">Coffee</span> at Beans Bliss
          </h1>
          <p className="hero-description">
            Indulge in our carefully crafted brews, made from ethically sourced beans and brewed to perfection.
          </p>
          <div className="hero-buttons">
            <a href="#menu">
              <button className="btn-primary">View Menu</button>
            </a>
            <a href="#menu">
              <button className="btn-secondary">Our Story</button>
            </a>
          </div>
        </div>
        {/* Image Section */}
        <div className="hero-image-container">
          <img src="/coffee5.png" alt="Coffee" className="hero-image" />
        </div>
      </div>
    </div>
  );
};

export default Hero;

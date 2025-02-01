"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo-container">
        <img className="logo" src="/Logo.png" alt="Logo" />
        <h1 className="logo-name">
          <span className="main-title">Bean Bliss Coffee</span>
          <br />
          <span className="sub-title">By Nida</span>
        </h1>
      </div>

      <div className="menu-icon" onClick={toggleMenu}>
        {isMenuOpen ? <FiX /> : <FiMenu />}
      </div>

      <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
        <Link href="/">Home</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
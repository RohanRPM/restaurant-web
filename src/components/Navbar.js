import React from 'react';
import '../assets/styles/Footer.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Restaurant</h1>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;

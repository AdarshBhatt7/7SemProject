import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="Nav">
      <ul className="Nav-list">
        <li className="Nav-list-item"><a href="#home">Home</a></li>
        <li className="Nav-list-item"><a href="#diagnose">Diagnose</a></li>
        <li className="Nav-list-item"><a href="#about-us">About Us</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;

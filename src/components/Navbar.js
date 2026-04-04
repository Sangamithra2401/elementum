import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar__logo">Elementum</div>
      <div className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
        {['Home', 'Studio', 'Services', 'Contact', 'FAQs'].map((item) => (
          <a key={item} href="#" className="navbar__link">{item}</a>
        ))}
      </div>
      <button
        className="navbar__hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>
    </nav>
  );
};

export default Navbar;

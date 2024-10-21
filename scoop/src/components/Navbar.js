import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">premm's Blog</Link>
      <div className="menu">
        <Link to="/">Home</Link>
        <Link to="/About">About</Link> {/* Changed to point to About route */}
        <Link to="/projects">Projects</Link>
      </div>
    </nav>
  );
}

export default Navbar;

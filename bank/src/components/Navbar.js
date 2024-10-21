import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo"></Link>
      <div className="menu">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link> {/* Prefer using lowercase route */}
        <Link to="/projects">Projects</Link>
      </div>
    </nav>
  );
}

export default Navbar;

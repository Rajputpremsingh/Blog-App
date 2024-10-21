import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Home from './components/Home';
import Navbar from './components/Navbar'; // Import Navbar
import About from './components/About'; // Import About
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      {/* <div className={darkMode ? "App dark-mode" : "App"}> */}
        <Navbar /> 

        {/* Search Bar */}
        {/* <div className="search-bar">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="search-button">
            <i className="fa fa-search"></i>
          </button>
        </div> */}

        {/* Dark/Light Mode Toggle
        <button className="mode-toggle" onClick={toggleDarkMode}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>

        <Link to="/login" className="login-button">Sign In</Link> */}

        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/about" element={<About />} />  {/* Change path to "/about" */}
          {/* <Route path="/login" element={<Signin />} /> */}
          {/* <Route path="/signup" element={<Signup />} /> */} */}
        </Routes>
      {/* </div> */}
    </Router>
  );
}

export default App;

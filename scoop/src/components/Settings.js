import React from 'react';

const Settings = ({ searchQuery, setSearchQuery, darkMode, toggleDarkMode }) => {
  return (
    <div className="settings">
      <h2>Settings</h2>
      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="search-button">
          <i className="fa fa-search"></i>
        </button>
      </div>

      {/* Dark/Light Mode Toggle */}
      <button className="mode-toggle" onClick={toggleDarkMode}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
};

export default Settings;

import React from 'react';
import './Dealer.css'; // Importing the CSS for Invite User UI

function Dealer() {
  return (
    <div className="invite-user-container">
      <h2>Invite Users</h2>
      <div className="invite-fields">
        <input type="text" placeholder="Email Address" className="invite-input" />
        <select className="invite-select">
          <option>Department</option>
        </select>
        <select className="invite-select">
          <option>Role Name</option>
        </select>
        <select className="invite-select">
          <option>Reporting Manager</option>
        </select>
      </div>

      <div className="invite-actions">
        <button className="add-button">+ Add</button>
        
      </div>
    </div>
  );
}

export default Dealer;

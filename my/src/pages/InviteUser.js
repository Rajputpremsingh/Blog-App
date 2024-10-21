import React from 'react';
import './InviteUser.css'; // Importing the CSS for Invite User UI

function InviteUser() {
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
        <button className="bulk-invite-button">Bulk Invite</button>
        <button className="send-invite-button">Send Invite</button>
      </div>
    </div>
  );
}

export default InviteUser;

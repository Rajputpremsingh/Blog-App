import React from 'react';
import './Userlist.css'; // Importing the CSS
import { Link } from 'react-router-dom';

function Userlist() {
  return (
    <div className="user-list-container">
      <div className="tab-menu">
        <div className="tab active">User List</div>
        <div className="tab">
        <Link to="/invite-user">Invite User</Link>
        </div>
        <div className="tab">Roles and Permissions</div>
        <div className="tab">Department</div>
        <div className="tab">Organisation Chart</div>
        <div className="tab"><Link to='/Dealer'>Dealer</Link> </div>
        <div className="tab">Adders</div>
      </div>

      <div className="action-bar">
        <div className="search-container">
          <input 
            type="text" 
            placeholder="Search (Name, Email, Phone No.)"
            className="search-input"
          />
        </div>

        <div className="show-container">
          <button className="show-button">
            Show 10 <span className="dropdown-arrow">▼</span>
          </button>
        </div>

        <div className="icon-buttons">
          <button className="icon-button delete">
            🗑️ {/* Delete Icon */}
          </button>
          <button className="icon-button share">
            📤 {/* Share Icon */}
          </button>
          <button className="action-button activate">
            Activate
          </button>
          <button className="action-button deactivate">
            Deactivate
          </button>
        </div>
      </div>
    </div>
  );
}

export default Userlist;




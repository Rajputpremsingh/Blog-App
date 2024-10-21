import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="tab">User List</Link>
      <Link to="/invite-users" className="tab">Invite Users</Link>
      <Link to="/roles-permissions" className="tab">Roles and Permissions</Link>
      <Link to="/department" className="tab">Department</Link>
      <Link to="/org-chart" className="tab">Organisation Chart</Link>
      <Link to="/dealers" className="tab">Dealers</Link>
    </nav>
  );
}

export default Navbar;

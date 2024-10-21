import React, { useState, useEffect } from 'react';
import './LeadsTable.css';

function LeadsTable() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch users from localStorage when the component mounts
    const savedUsers = localStorage.getItem('users');
    if (savedUsers) {
      setUsers(JSON.parse(savedUsers));
    }
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter users based on the search term
  const filteredUsers = users.filter((user) =>
    user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.lastName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="leads-table-container">
      <div className="table-header">
        <input
          type="text"
          className="search-input"
          placeholder="Search By Name/Contact No/Project..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button className="new-leads-btn">+ New Leads</button>
      </div>

      <div className="tabs">
        <button className="tab active">New Leads <span className="badge"></span></button>
        {/* <button className="tab">Design Complete <span className="badge"></span></button>
        <button className="tab">Proposal Generated <span className="badge"></span></button>
        <button className="tab">Contract signed <span className="badge"></span></button> */}
      </div>

      <table className="leads-table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user, index) => (
              <tr key={index}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
                <td>{user.address}</td>
                <td>...</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No users available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default LeadsTable;

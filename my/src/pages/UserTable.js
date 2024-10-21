import React, { useEffect, useState } from 'react';

function UserTable() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users from localStorage when the component mounts
    const savedUsers = localStorage.getItem('users');
    if (savedUsers) {
      setUsers(JSON.parse(savedUsers));
    }
  }, []);

  return (
    <div className='table-container'>
    <div className="custom-table">
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user, index) => (
              <tr key={index}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No users available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default UserTable;

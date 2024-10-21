import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Address from './pages/Address';
import Userlist from './pages/Userlist';
import InviteUser from './pages/InviteUser';
import Dealer from './pages/Dealer';
import Electri from './pages/Electri';
import Destails from './pages/Destails';
import SolarFormRight from './pages/SolarFormRight';
import LeadsTable from './pages/LeadsTable';
import { useState } from 'react';
import './pages/Address.css';

function App() {
  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem('users');
    return savedUsers ? JSON.parse(savedUsers) : [];
  });

  const [address, setAddress] = useState('');

  // Function to add users to the state for displaying in the table
  const addUser = (user) => {
    setUsers((prevUsers) => {
      const updatedUsers = [...prevUsers, { ...user, address }]; // Include address in user data
      localStorage.setItem('users', JSON.stringify(updatedUsers));
      return updatedUsers;
    });
  };

  // Function to set address from Address.js
  const saveAddress = (addressInput) => {
    setAddress(addressInput);
  };

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />

          {/* Pass saveAddress function to Address.js */}
          <Route path="/Address" element={<Address saveAddress={saveAddress} />} />

          <Route path="/Userlist" element={<Userlist />} />
          <Route path="/invite-user" element={<InviteUser />} />
          <Route path="/Dealer" element={<Dealer />} />
          <Route path="/Electric" element={<Electri />} />
          <Route path="/Destails" element={<Destails />} />

          {/* Correctly passing addUser function */}
          <Route path="/SolarFormRight" element={
            <div className="app-container">
              <div className="form-section">
                <SolarFormRight addUser={addUser} />
              </div>
              <div className="table-section">
                <LeadsTable users={users} />
              </div>
            </div>
          } />

          {/* Separate route for viewing the leads table */}
          <Route path="/LeadsTable" element={<LeadsTable users={users} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

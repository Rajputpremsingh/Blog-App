import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Address.css';

function Address({ saveAddress }) {
  const [addressInput, setAddressInput] = useState('');
  const navigate = useNavigate();

  const handleAddressChange = (e) => {
    setAddressInput(e.target.value);
  };

  const handleAddressSubmit = (e) => {
    e.preventDefault();
    if (addressInput.trim()) {
      saveAddress(addressInput); // Save address to App.js state
      alert('Address saved!');
      navigate('/electric');
    } else {
      alert('Please enter a valid address.');
    }
  };

  return (
    <div className="solar-app">
      {/* UI for Address component */}
      <div className="right-side">
        <h1>React Learner.</h1>
        <p>Visualize your with new Learn </p>

        {/* Use only one form */}
        <form className="solar-form" onSubmit={handleAddressSubmit}>
          <input
            type="text"
            placeholder="Home Address"
            value={addressInput}
            onChange={handleAddressChange}
            required
          />
          <label>
            <input type="checkbox" /> I am a homeowner.
          </label>
          
          <button type="submit">Go React &raquo;</button>
        </form>
      </div>
    </div>
  );
}

export default Address;

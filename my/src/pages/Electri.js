import React, { useState } from 'react';
import './Electri.css';
import { useNavigate } from 'react-router-dom';

function Electri() {
  const [sliderValue, setSliderValue] = useState(100);
  const [utilityBill, setUtilityBill] = useState(100);
  const [utilityProvider, setUtilityProvider] = useState('Consolidated Edison Co of New York Inc');
  const navigate = useNavigate(); // Initialize navigate function

  const handleSliderChange = (e) => {
    setSliderValue(e.target.value);
    setUtilityBill(e.target.value); // Keep the input box in sync with the slider
  };

  const handleUtilityBillChange = (e) => {
    setUtilityBill(e.target.value);
  };

  const handleUtilityProviderChange = (e) => {
    setUtilityProvider(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/SolarFormRight'); // Navigate to the next screen
  };

  return (
    <div className="electricity-bill-container">
      {/* Back button */}
      <div className="back-button">&larr; Back</div>
      
      <h2>Enter Your Electricity Bill</h2>
      <p>Let Solar do the magic for substantial electricity savings.</p>

      {/* Slider */}
      <div className="slider-container">
        <input
          type="range"
          min="14"
          max="2500"
          value={sliderValue}
          onChange={handleSliderChange}
        />
        <div className="slider-value">
          <span>${sliderValue}</span>
        </div>
        <div className="slider-labels">
          <span>$14</span>
          <span>$2500</span>
        </div>
      </div>

      {/* Estimated Monthly Bill Input */}
      <div className="input-container">
        <label htmlFor="utility-bill">Enter Estimated monthly utility bill($)</label>
        <input
          type="number"
          id="utility-bill"
          value={utilityBill}
          onChange={handleUtilityBillChange}
        />
      </div>

      {/* Select Utility Provider */}
      <div className="input-container">
        <label htmlFor="utility-provider">Select Utility Provider</label>
        <select
          id="utility-provider"
          value={utilityProvider}
          onChange={handleUtilityProviderChange}
        >
          <option value="Consolidated Edison Co of New York Inc">
            Consolidated Edison Co of New York Inc
          </option>
          <option value="Pacific Gas and Electric Company">Pacific Gas and Electric Company</option>
          <option value="Southern California Edison">Southern California Edison</option>
        </select>
      </div>

      {/* Powered by info */}
      <p className="powered-by">Powered by Blaze Solar Inc.</p>

      {/* My Solar Savings Button */}
      <button className="solar-savings-button" onClick={handleSubmit}>My Solar Savings &raquo;</button>
    </div>
  );
}

export default Electri;

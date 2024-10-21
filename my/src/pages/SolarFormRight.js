import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SolarFormRight({ addUser }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });

  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    console.log('Submitting form with data:', formData); // Log form data

    try {
      // Check for empty fields before calling addUser
      if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
        throw new Error('All fields are required.');
      }

      await addUser(formData); // Use addUser function passed as prop
      setFormData({ firstName: '', lastName: '', email: '', phone: '' });
      alert('Form submitted successfully!');

      // Navigate to the user table after adding the user
      navigate('/Login'); 
    } catch (error) {
      console.error('Error adding user:', error.message); // Log the error message
      alert('Failed to add user. Please try again.');
    }
  };

  return (
    <div className="solar-app">
      <div className="solar-form-container-right">
        <div className="right-side-form">
          <h2>Customer Details</h2>
          <p>Please enter your details to proceed further</p>
          <form onSubmit={handleSubmit} className="solar-form">

            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Mobile Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SolarFormRight;


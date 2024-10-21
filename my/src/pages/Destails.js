import React, { useState } from 'react';
import './Destails.css';

function Destails() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    let tempErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const phoneRegex = /^[0-9]{10}$/;

    if (!formData.firstName) tempErrors.firstName = "First Name is required";
    if (!formData.lastName) tempErrors.lastName = "Last Name is required";
    if (!formData.email || !emailRegex.test(formData.email)) tempErrors.email = "Valid Email is required";
    if (!formData.mobileNumber || !phoneRegex.test(formData.mobileNumber)) tempErrors.mobileNumber = "Valid 10-digit Mobile Number is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true); // Show popup on successful validation
    }
  };

  const closePopup = () => {
    setIsSubmitted(false); // Close the popup
  };

  return (
    <div className="solar-form-container-right">
      <div className="right-side-form">
        <button className="back-button">← Back</button>
        <h2>Congratulations! Your solar design is ready</h2>
        <p>Please provide your details so that our solar advisor could reach out to you.</p>
        <form onSubmit={handleSubmit} className="solar-form">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
          />
          {errors.firstName && <span className="error">{errors.firstName}</span>}

          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
          />
          {errors.lastName && <span className="error">{errors.lastName}</span>}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}

          <input
            type="text"
            name="mobileNumber"
            placeholder="Mobile Number"
            value={formData.mobileNumber}
            onChange={handleChange}
          />
          {errors.mobileNumber && <span className="error">{errors.mobileNumber}</span>}

          <p className="consent-text">
            By providing your phone number, you consent to receive Email, SMS, and calls for this event.
          </p>
          <div className="powered-text">
            Powered by <b>Blaze Solar Inc.</b>
          </div>
          <button type="submit" className="submit-button">You all are set! ➤</button>
        </form>

        {isSubmitted && (
          <div className="popup">
            <div className="popup-content">
              <h3>Form Submitted Successfully!</h3>
              <button onClick={closePopup} className="close-popup-button">Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Destails;

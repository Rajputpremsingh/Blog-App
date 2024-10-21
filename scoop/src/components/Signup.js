// Signup.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

function Signup() {
  return (
    <div className="form-container">
      <div className="form-content">
        <h1>Create an Account</h1>

        <input type="text" placeholder="Your Username" className="input-field" />
        <input type="email" placeholder="name@company.com" className="input-field" />
        <input type="password" placeholder="****" className="input-field" />

        <button className="sign-up-button">Sign Up</button>
        <button className="google-button">
          <span className="google-icon">G</span> Continue with Google
        </button>

        <p className="signin-text">
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;

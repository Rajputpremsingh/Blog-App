import React from 'react';
import { Link } from 'react-router-dom';
import './Signin.css';

function Signin() {
  return (
    <div className="form-container">
      <div className="form-content">
        <h1>Sahand's Blog</h1>
        <p>This is a demo project. You can sign in with your email and password or with Google.</p>

        <input type="email" placeholder="name@company.com" className="input-field" />
        <input type="password" placeholder="****" className="input-field" />

        <button className="sign-in-button">Sign In</button>
        <button className="google-button">
          <span className="google-icon">G</span> Continue with Google
        </button>

        <p className="signup-text">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
}

export default Signin;

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';


 function Login () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();

    if (email && password) {
      alert('Sign-in successful!');
      navigate('/LeadsTable'); // Redirect to LeadsTable
    } else {
      alert('Please enter both email and password.');
    }
  };
  return (
    <div className="form-container">
      <form className="form-content" onSubmit={handleSignIn}>
        <h1>Prem's Blog</h1>
        <p>This is a demo project. You can sign in with your email and password or with Google.</p>

        <input type="email"
          placeholder="name@company.com"
          className="input-field"
          value={email}
          onChange={(e) => setEmail(e.target.value)} />
        <input type="password"
          placeholder="****"
          className="input-field"
          value={password}
          onChange={(e) => setPassword(e.target.value)} />

        <button className="sign-in-button" type='submit'>Sign In</button>
        <button className="google-button">
          <span className="google-icon">G</span> Continue with Google
        </button>

        <p className="signup-text">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </form>
    </div>
  )
}
export default Login;
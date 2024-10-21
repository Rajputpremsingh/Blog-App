import React from 'react';
import './App.css'; // You can customize styles in your CSS file

function Login() {
  return (
    <div className="app">
      <header className="header">
        <div className="logo">
          <h1>
            <span className="brand-highlight">Prem's</span> Blog
          </h1>
        </div>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Projects</a></li>
          </ul>
        </nav>
        <button className="sign-in-btn">Sign In</button>
      </header>

      <main className="form-container">
        <div className="form-content">
          <h1>
            <span className="brand-highlight">Prem's</span> Blog
          </h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo quisquam hic impedit nisi quod veniam maiores fugit qui magnam alias?</p>
          
          <form className="signup-form">
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button className="signup-btn">Sign-Up</button>
          </form>
          
          <button className="google-btn">
            <span className="google-icon">G</span> Continue With Google
          </button>

          <p className="signin-text">
            Have an Account? <a href="#">Sign-in</a>
          </p>
        </div>
      </main>
    </div>
  );
}

export default Login;

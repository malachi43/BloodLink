import React from "react";
import "./LoginOptions.css";

const LoginOptions = () => {
  return (
    <div className="login-options-container">
      <div className="login-option">
        <a href="/donor-login" className="login-link">
          <div className="link-content">
            <img 
              src="../images/postive.png" 
              alt="Donor Icon" 
              className="icon donor-icon" 
            />
            <span className="text">Login as a Donor</span>
          </div>
        </a>
      </div>
      <div className="login-option">
        <a href="/recipient-login" className="login-link">
          <div className="link-content">
            <img 
              src="../images/negavtive.png" 
              alt="Recipient Icon" 
              className="icon recipient-icon" 
            />
            <span className="text">Login as a Recipient</span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default LoginOptions;

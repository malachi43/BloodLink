import React from "react";
import "./LoginOptions.css";

const LoginOptions = () => {
  return (
    <div className="pt-10">
          <div className="login-options-container bg-[#8b0a192f] w-fit p-4 rounded-lg place-self-center">
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
        <a href="/donor-login" className="login-link">
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
    </div>
  );
};

export default LoginOptions;

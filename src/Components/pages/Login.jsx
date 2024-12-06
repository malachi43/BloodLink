import React from "react";
import "./LoginOptions.css";
import { Link } from "react-router-dom";


const LoginOptions = () => {

  return (
    <div className="pt-10">
          <div className="Sign-options-container bg-[#8b0a192f] w-fit p-4 rounded-lg place-self-center">
      <div className="Sign-option">
        <Link reloadDocument to="/LoginForm" className="signup-link">
          <div className="link-content">
            <img 
              src="../images/postive.png" 
              alt="Donor Icon" 
              className="icon donor-icon" 
            />
            <span className="text">Login as a Donor</span>
          </div>
        </Link>
      </div>
      <div className="login-option">
        <Link reloadDocument to="/LoginForm" className="Signup-link">
          <div className="link-content">
            <img 
              src="../images/negavtive.png" 
              alt="Recipient Icon" 
              className="icon recipient-icon" 
            />
            <span className="text">Login as a Recipient</span>
          </div>
        </Link>
      </div>
    </div>
    </div>
  );
};

export default LoginOptions;

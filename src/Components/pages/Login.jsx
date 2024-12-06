<<<<<<< HEAD
import React from "react";
import "./LoginOptions.css";
import { Link } from "react-router-dom";


const LoginOptions = () => {
=======
import styled from "styled-components";
const googleIcon = "../../../images/google-icon2.png";
const facebookIcon = "../../../images/facebook-icon2.png";
import {Link} from 'react-router-dom'
>>>>>>> 664f764a8f5e9f8611d40b8c0813b12900be43c1

  return (
<<<<<<< HEAD
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
=======
    <Container>
      <MainContainer>
        <p class="header">Welcome Back!</p>
        <p class="header-text">To get started log into your account.</p>
        <InputWrapper>
          <input type="text" placeholder="Enter your email" />
        </InputWrapper>
        <InputWrapper>
          <input type="text" placeholder="Password" />
        </InputWrapper>
        <p class="forgot-password">Forgot Password?</p>
        <Link reloadDocument to="/home"><button class="login-btn">Log In</button></Link>
        <div class="option-text">
          <div class="line"></div>
          <p>Or log in with</p>
          <div class="line"></div>
        </div>
        <div class="btn-wrapper">
          <div className="img-wrapper">
            <img src={googleIcon} alt="google icon" />
>>>>>>> 664f764a8f5e9f8611d40b8c0813b12900be43c1
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

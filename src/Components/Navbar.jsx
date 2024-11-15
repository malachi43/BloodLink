import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  // State to manage mobile dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar">
      <div>
        <img src="images/logo.png" alt="logo" />
      </div>

      {/* Standard Navigation Links for Large Screens */}
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/donate-blood">Donate Blood</Link></li>
        <li><Link to="/receive-blood">Receive Blood</Link></li>
        <li><Link to="/group-donation">Group Donation</Link></li>
        <li><Link to="/about-us">About Us</Link></li>
      </ul>

      {/* Authentication Links for Large Screens */}
      <div className="nav-auth">
        <Link to="/login" className="login-btn">Log In</Link>
        <Link to="/signup" className="signup-btn">Sign Up</Link>
      </div>

      {/* Mobile Dropdown Toggle Button (Visible only on small screens) */}
      <div className="dropdown-toggle" onClick={toggleDropdown}>
        <span className="hamburger-icon">&#9776;</span> {/* Hamburger icon */}
      </div>

      {/* Mobile Dropdown Menu */}
      {isDropdownOpen && (
        <div className="mobile-dropdown">
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/donate-blood">Donate Blood</Link></li>
            <li><Link to="/receive-blood">Receive Blood</Link></li>
            <li><Link to="/group-donation">Group Donation</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
          </ul>
          <div className="nav-auth">
            <Link to="/login" className="login-btn">Log In</Link>
            <Link to="/signup" className="signup-btn">Sign Up</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

import React, { useState } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      {/* Logo Section */}
      <Link reloadDocument to="/" className="title">
        <img 
          src="images/logo.png" 
          alt="Website Logo" 
          className="logo"
        />
      </Link>

      {/* Hamburger Menu Icon */}
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation Menu */}
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink reloadDocument to="/">Home</NavLink>
        </li>
        <li>
          <NavLink reloadDocument to="/donate-blood">Donate Blood</NavLink>
        </li>
        <li>
          <NavLink reloadDocument to="/receive-blood">Receive Blood</NavLink>
        </li>
        <li>
          <NavLink reloadDocument to="/Groupdonation">Group Donation</NavLink>
        </li>
        <li>
          <NavLink reloadDocument to="/ImpactDashboard">ImpactDashboard</NavLink>
        </li>
        <li>
          {/* Login with arrow down */}
          <NavLink reloadDocument to="/login">
            Login <span className="arrow">▼</span>
          </NavLink>
        </li>
        <li>
          {/* Sign Up with arrow down */}
          <NavLink reloadDocument to="/signup" className="signup">
            Sign Up <span className="arrow">▼</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

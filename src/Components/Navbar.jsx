import React, { useState } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link reloadDocument to="/" className="title">
        <img 
          src="images/logo.png" 
          alt="Website Logo" 
          className="logo"
        />
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
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
          <NavLink reloadDocument to="/login">Login</NavLink>
        </li>
        <li>
  <NavLink reloadDocument to="/signup" className="signup">Sign Up</NavLink>
</li>
      </ul>
    </nav>
  );
};

import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Bill Payment</div>
      <ul className="navbar-links">
        <li><Link to="/admin">Admin</Link></li>
        <li><Link to="/biller">Biller</Link></li>
        <li><Link to="/customer">Customer</Link></li>
        <li><Link to="/auth/login">Login</Link></li>
        <li><Link to="/auth/signup">Sign Up</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

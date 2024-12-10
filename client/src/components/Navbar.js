import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/navbar.css';

/**
 * Navbar component
 * Provides navigation links to various routes
 */
const Navbar = () => {
  const location = useLocation(); // Use location hook to highlight active link

  // Check if the link is active
  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            <Link to="/" className="logo-link">Workout Logger</Link>
          </div>
          <ul className="navbar-links">
            <li className={`navbar-item ${isActive('/')}`}>
              <Link to="/" className="navbar-link">Home</Link>
            </li>
            <li className={`navbar-item ${isActive('/register')}`}>
              <Link to="/register" className="navbar-link">Register</Link>
            </li>
            <li className={`navbar-item ${isActive('/login')}`}>
              <Link to="/login" className="navbar-link">Login</Link>
            </li>
            <li className={`navbar-item ${isActive('/dashboard')}`}>
              <Link to="/dashboard" className="navbar-link">Dashboard</Link>
            </li>
            <li className={`navbar-item ${isActive('/log-workout')}`}>
              <Link to="/log-workout" className="navbar-link">Log Workout</Link>
            </li>
            <li className={`navbar-item ${isActive('/view-workouts')}`}>
              <Link to="/view-workouts" className="navbar-link">View Workouts</Link>
            </li>
          </ul>
        </div>
      </nav>
  );
};
export default Navbar;
import React from 'react';
import { NavLink } from 'react-router-dom';
import './AuthNav.scss';

const Navigation = () => (
  <div className="auth-nav">
    <NavLink to="/register" className="auth-nav-link">
      Register
    </NavLink>

    <NavLink to="/login" className="auth-nav-link">
      Login
    </NavLink>
  </div>
);

export default Navigation;

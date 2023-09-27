import React from 'react';
import { NavLink } from 'react-router-dom';
import './AuthNav.scss';

const AuthNav = ({ theme }) => (
  <div className="AuthNaw__Wrapper">
    <NavLink to="/register" className="AuthNav__link">
      Register
    </NavLink>

    <NavLink to="/login" className="AuthNav__link">
      Login
    </NavLink>
  </div>
);

export default AuthNav;

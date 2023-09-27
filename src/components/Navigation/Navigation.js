import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.scss';

const Navigation = () => (
  <nav className="Nav__Wrapper">
    <NavLink to="/" className="Nav__link">
      Home
    </NavLink>

    <NavLink to="/contacts" className="Nav__link">
      Contacts
    </NavLink>
  </nav>
);

export default Navigation;

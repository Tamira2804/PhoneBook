import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.scss';

const Navigation = () => (
  <nav>
    <NavLink to="/" className="nav-link">
      Home
    </NavLink>

    <NavLink to="/contacts" className="nav-link">
      Contacts
    </NavLink>
  </nav>
);

export default Navigation;

import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <header className="header">
    <div className="logo-container">
      <p className="logo-text">Bookstore CMS</p>
    </div>
    <ul className="header-links">
      <li className="header-link">
        <NavLink to="/">BOOKS</NavLink>
      </li>
      <li className="header-link">
        <NavLink to="/categories">CATEGORIES</NavLink>
      </li>
    </ul>

  </header>
);
export default Navbar;

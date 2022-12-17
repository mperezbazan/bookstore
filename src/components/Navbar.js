import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => (
  <header className="header">
    <Link to="/" className="logo-text">
      Bookstore CMS
    </Link>
    <ul className="header-links">
      <li className="header-link">
        <NavLink to="/">BOOKS</NavLink>
      </li>
      <li className="header-link">
        <NavLink to="/categories">CATEGORIES</NavLink>
      </li>
    </ul>
    <button type="button" className="header-button">
      <FontAwesomeIcon icon={faUser} className="user-icon" />
    </button>
  </header>
);
export default Navbar;

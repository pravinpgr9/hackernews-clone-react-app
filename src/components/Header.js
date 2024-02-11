import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <React.Fragment>
      <h1>Hacker News Clone</h1>
      <nav className="nav-link">
        {/* Use 'className' property for styling (React Router v6) */}
        <NavLink to="/top" className={({ isActive }) => (isActive ? 'active' : '')}>
          Top Stories
        </NavLink>
        <NavLink to="/new" className={({ isActive }) => (isActive ? 'active' : '')}>
          Latest Stories
        </NavLink>
        <NavLink to="/best" className={({ isActive }) => (isActive ? 'active' : '')}>
          Best Stories
        </NavLink>
      </nav>
    </React.Fragment>
  );
};

export default Header;

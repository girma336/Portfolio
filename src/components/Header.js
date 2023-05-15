import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { links } from './data';
import './Header.css';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="nav">
      <div className={`${showMenu ? 'nav__menu show-menu' : 'nav__menu'}`}>
        <ul className="nav__list">
          {links.map(({
            id, name, icon, path,
          }) => (
            <li className="nav__item" key={id}>
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? 'nav__link active-nav' : 'nav__link')}
                onClick={handleClick}
              >
                {icon}
                <h3 className="nav__name">{name}</h3>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div
        className={
      `${showMenu ? 'nav__toggle animate-toggle' : 'nav__toggle'}`
      }
        role="button"
        tabIndex={0}
        onClick={(e) => handleClick(e)}
        onKeyDown={(e) => handleClick(e)}
      >
        <span />
        <span />
        <span />
      </div>
    </nav>
  );
};

export default Header;

import React from 'react'
import {NavLink} from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <h2 className="header-title">Movie Mate</h2>
      <nav className="header-nav">
      <ul className="header-menu">
      <li className="header-item">
          <NavLink to='/'>
           Home
          </NavLink>
        </li>
        <li className="header-item">
          <NavLink to='/movies'>
           Movies
          </NavLink>
        </li>
        <li className="header-item">
          <NavLink to='/about'>
           About
          </NavLink>
        </li>
      </ul>
</nav>

    </div>
  )
}


export default Header;

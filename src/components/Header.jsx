import React from 'react';
import { logo } from '../images/images ';
import Hamburger from './Hamburger';

const Header = () => (
  <header>
    <nav className="container-fluid navbar fixed-top px-5">
      <Hamburger />
      <div className="desktop-menu">
        <a href="#homepage" className="logo">
          <img src={logo} alt="logo" />
        </a>
        <div className="container-fluid d-flex justify-content-end">
          <ul className="list-unstyled d-flex align-items-end text-light ps-5">
            <li className="pt-2 pe-3 nav-item">
              <a href="#projects" className="text-decoration-none menu h6">
                Portfolio
              </a>
            </li>
            <li className="pt-2 pe-3 nav-item">
              <a href="#about-me" className="text-decoration-none menu h6">
                About
              </a>
            </li>
            <li className="pt-2 pe-3 nav-item">
              <a href="#contact-me" className="text-decoration-none menu h6">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
);

export default Header;

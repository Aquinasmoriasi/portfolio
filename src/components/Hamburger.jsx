import React, { useState } from 'react';

const Hamburger = () => {
  const [show, setMenu] = useState(false);

  const hidden = {
    transform: 'translateX(0)',
  };

  const shown = {
    transform: 'translateX(-100vh)',
  };

  const handleMenu = () => {
    setMenu(!show);
  };
  return (
    <div className="mobile-menu">
      <div className="hamburger">
        <button
          className={show ? 'hamburger active' : 'hamburger'}
          onClick={handleMenu}
          type="button"
        >
          <i className="ham" />
          <i className="ham" />
          <i className="ham" />
        </button>
      </div>
      <ul
        id="mobile-menu"
        className="list-unstyled text-light ps-5 menu-links"
        style={!show ? shown : hidden}
      >
        <li className="pt-2 pe-3 nav-item">
          <a
            href="#projects"
            onClick={handleMenu}
            className="text-decoration-none menu h6"
          >
            Portfolio
          </a>
        </li>
        <li className="pt-2 pe-3 nav-item">
          <a
            href="#about-me"
            onClick={handleMenu}
            className="text-decoration-none menu h6"
          >
            About
          </a>
        </li>
        <li className="pt-2 pe-3 nav-item">
          <a
            href="#contact-me"
            onClick={handleMenu}
            className="text-decoration-none menu h6"
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Hamburger;

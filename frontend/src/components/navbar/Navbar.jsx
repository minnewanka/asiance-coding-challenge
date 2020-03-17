import React, { useEffect, useRef } from 'react';
import './style.scss';
import { MENU } from '../../utils/constants';
import Scrollspy from 'react-scrollspy';
import './style.scss';

const Navbar = props => {
  const navbarRef = useRef(null);

  // useEffect(() => {
  //   window.onscroll = function() {
  //     if (window.pageYOffset > 300) {
  //       navbarRef.current.classList.add('scrolled');
  //     } else {
  //       navbarRef.current.classList.remove('scrolled');
  //       logoRef.current.classList.remove('navbar-hidden');
  //     }
  //   };
  // });

  return (
    <div ref={navbarRef} className="navbar">
      <Scrollspy items={MENU} componentTag="div" currentClassName="activeItem">
        <div>
          <h1>THE BLOG</h1>
        </div>
        <div className="navbar-menu">
          {MENU.map(item => (
            <div className="navbar-section">
              <a className="nostyle" href={`#${item}`}>
                {item.toUpperCase()}
              </a>
            </div>
          ))}
        </div>
      </Scrollspy>
    </div>
  );
};

export default Navbar;

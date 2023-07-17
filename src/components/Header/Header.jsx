import React from 'react';
import './header.css';
import CTA from 'components/CTA/CTA';
import ME from '../../images/me.png';
import HeaderSocials from '../HeaderSocials/HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Alejandro Lago Navarro</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="my foto" />
        </div>

        <a href="#contact" className="scroll__down">
          Scoll Down
        </a>
      </div>
    </header>
  );
};

export default Header;

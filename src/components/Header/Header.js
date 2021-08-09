import React from 'react';
import './Header.css';

/**
 * The Header component represents a basic header with
 * a brand saying what the application is called.
 */
const Header = (props) => {

  return (
    <div className="header-wrapper">
      <div className="brand"><span className="brand-color">Poly</span>Roller</div>
    </div>
  );

}

export default Header;
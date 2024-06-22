import React from 'react';
import './Navbar.css';
import Buttons from './Buttons';
import Web from './Web';
function Navbar(props) {

  return (
    <nav id="nav">
      <Web />
      <Buttons />
    </nav>
  );
}

export default Navbar
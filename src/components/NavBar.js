import React from 'react';
import {navbar} from '../style';

const NavBar = () => (
  <div style={navbar.container}>
    <div style={navbar.infoMenuButton}>
      <a href="#">
        <img style={navbar.icon} src="open-iconic-master/svg/menu.svg" alt="menu"></img>
      </a>
    </div>
    <a href="#" style={navbar.text}>HPD Violations</a>
  </div>
);

export default NavBar;

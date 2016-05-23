import React from 'react';
import {navbar} from '../style';

const NavBar = () => (
  <header className="w-100 h3 bg-light-gray pv0 mb3">
    <div className="pv3">
        <a href="#">
        <img  className="v-mid w1 h1"src="open-iconic-master/svg/menu.svg" alt="menu"></img>
      </a>
       <a className="link f3 pl3 hover-gray black focus-gray b" href="#" >HPD Violations</a>
    </div>
  </header>
);

export default NavBar;

import React from 'react';
import {connect} from 'react-redux';
import {openSidebar} from '../actions/sidebar';

export const NavBar = ({dispatch}) => (
  <header className="w-100 h3 bg-light-gray pv0 pl3">
    <div className="pv3">
    <span onClick={()=> dispatch(openSidebar())}
      className="cursor-pointer"
    >ABOUT</span>
        <a className="link f3 pl3 hover-gray black focus-gray b" href="#" >HPD Violations</a>
    </div>
  </header>
);

NavBar.propTypes = {
  dispatch: React.PropTypes.func
};

export default connect()(NavBar);


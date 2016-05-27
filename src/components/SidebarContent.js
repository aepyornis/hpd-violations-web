import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import {closeSidebar} from '../actions/sidebar';


/**
 * Content of SideBar.
 * Clicking on 'ABOUT' closes the sidebar
 * @param {function} dispatch
 */
export const SidebarContent = ({dispatch}) =>(
    <div className="mw5">
    <p>The New York City Department of Houising, Preservation, and Development issues thousands on housing violations each month</p>
    <button onClick={()=>dispatch(closeSidebar())}>Close</button>
    </div>
);

SidebarContent.propTypes = {
  dispatch: PropTypes.func
};

export default connect()(SidebarContent);

import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import {closeSidebar} from '../actions/sidebar';

/**
 * Content of SideBar.
 * Clicking on 'ABOUT' closes the sidebar
 * @param {function} dispatch
 */
export const SidebarContent = ({dispatch}) =>(
    <div className="mw6">
    <div className="tr pt1 pr2"><button onClick={()=>dispatch(closeSidebar())}>Close</button></div>

    <div className="tc pt1"><span className="tc f4">Housing Violations in NYC</span></div>
    <p>The Department of Housing, Preservation, and Development (HPD) issues violation to owners if their buildings fail to conform to the NYC Housing Maintenance Code or the NYS Multiple Dwelling Law. This amounts to a lot of violations: there are nearly <strong>2 million</strong> open housing violations and HPD had issued over million violations since 2015. Landlords regularly fail to maintain their building and many thousands of tenants are forced to live in sub-par buildings with  uninhabitable conditions. </p>
    <p>There are 4 classes of violations:</p>

    <p><strong>C - "Immediatly Hazardous"</strong> These include lack of heat/hot water, lead-paint, and other extreme conditions. An owner has generally only 24 hours to fix these violations.<br /><br /> <strong>I -</strong> This type of violation typically indicates that the owner failed to register their building properly with HPD.<br /><br /><strong>B - "Hazardous"</strong> An owner has 30 days to correct this type of violation.<br /><br /> <strong>A - "Non-hazardous".</strong> This includes less issues such as minor leaks. An owner has 90 days to correct this type of violation.</p>

    <p><strong>About this data:</strong><br />The data for this websites comes from <a href="http://www1.nyc.gov/site/hpd/about/open-data.page">HPD's open data</a> portal. It contains both open and closed violations since January 2015 and all open violations even if the violation was issued years ago.

    HPD does provide a service, <a href="http://www1.nyc.gov/site/hpd/about/hpdonline.page">HPD ONLINE</a>, where you can look up violations and other information.</p>


    <p><strong>What to do if you building has violations:</strong><br />

    If your landlord won't fix them, you can take your landlord to housing court to force them to fix the problems and even potentially receive a rent abatement.</p>

    <p><strong>Who made this?</strong><br />

    Ziggy did. You can email him here: ziggy[at]elephant-bird.net.<br /><br />

    This website is open source (license: GPLv3). You can download, modify, and examine the source code: <a href="https://github.com/aepyornis/hpd-violations-web">github.com/aepyornis/hpd-violations-web</a> <br /> <br />

    For more nyc housing tools, go to: <a href="https://nycchr.org">NYC Critical Housing Research</a></p>
</div>
);

SidebarContent.propTypes = {
  dispatch: PropTypes.func
};

export default connect()(SidebarContent);

// <div className="tc pt2"><button onClick={()=>dispatch(closeSidebar())}>Close</button></div> 

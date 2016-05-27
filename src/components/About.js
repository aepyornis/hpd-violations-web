import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Sidebar from 'react-sidebar';
import SidebarContent from './SidebarContent';
import {sidebarStyle} from '../style';

/**
 * About Sidebar Component
 * It wraps the rest of the app. Pass the entire app into appContent
 */
export const About = ({isOpen, appContent}) => (
        <Sidebar sidebar={<SidebarContent />}
             open={isOpen}
             styles={sidebarStyle} >
        {appContent}
       </Sidebar>
);

About.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    appContent: React.PropTypes.node.isRequired
};

About.defaultProps = {
    isOpen: false
};

const mapStateToProps = (state) => ({
    isOpen: state.sidebarOpen
});

export default connect(mapStateToProps)(About)

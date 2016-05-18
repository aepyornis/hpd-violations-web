import React, { PropTypes } from 'react';
import { connect } from 'react-redux';


const statusText = (status) => {
  switch (status) {
  case 'VIOLATION_NOT_FOUND':
    return 'No Violations found for this building. If you want to verify this "result go to <a href="https://hpdonline.hpdnyc.org/HPDonline/provide_address.aspx">HPD ONLINE</a>';
  case 'VIOLATION_NETWORK_ERROR':
    return 'We are having technical difficulties. Please check back later or email ziggy[at]elephant-bird.net for help';
  case 'VIOLATION_IN_PROGRESS':
    return 'Retriving Violations...';
  default:
    return '';
  };
};

const hide = status => (status === 'VIOLATION_FOUND');


/**
 * Displays status of Violation Search
 * @param {String} status
 * @returns {React.Component} 
 */
export const ViolationStatus = ({status}) => (hide(status)) ? 
  <div></div> : 
  (<div className="row">
        <h5>{statusText(status)}</h5>
   </div>);


const mapStateToProps = (state) => {
  return {
    status: state.violations.status
  };
};


export default connect(mapStateToProps)(ViolationStatus);

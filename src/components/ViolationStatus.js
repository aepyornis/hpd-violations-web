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

/**
 * Hides (returns true) if geoclientStatus is not 'DONE_FOUND' or 
 * status is 'DONE_FOUND' and violations are 'VIOLATION_FOUND'
 * @param {object} - props 
 * @returns {Boolean} 
 */
export const hide = props => (props.geoclientStatus !== 'DONE_FOUND') || 
  (props.violationStatus === 'INIT') || 
  (props.violationStatus === 'VIOLATION_FOUND' && props.geoclientStatus === 'DONE_FOUND');

/**
 * Displays status of Violation Search
 * @param {String} status
 * @returns {React.Component} 
 */
export const ViolationStatus = (props) => hide(props) ? 
  <div></div> : 
  (<div className="row">
        <h5>{statusText(props.violationStatus)}</h5>
   </div>);

// export const ViolationStatus = (props) => {
//   if (props.geoclientStatus === 'DONE_FOUND') {
    
//   }

// }hide(props) ? 
//   <div></div> : 
//   (<div className="row">
//         <h5>{statusText(props.violationStatus)}</h5>
//    </div>);


const mapStateToProps = (state) => {
  return {
    violationStatus: state.violations.status,
    geoclientStatus: state.geoclient.status
  };
};

export default connect(mapStateToProps)(ViolationStatus);

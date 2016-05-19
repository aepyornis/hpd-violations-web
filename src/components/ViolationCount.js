import React from 'react';

/**
 * Total Violation Count Display Component
 * @param {String} count
 * @returns {React.Component}
 */
export const ViolationCount = ({count}) => (
    <h6><b>Total Violations: </b>{count}</h6>
);

ViolationCount.propTypes = {
  count: React.PropTypes.string
};

export default ViolationCount;


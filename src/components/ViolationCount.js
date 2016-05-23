import React from 'react';

/**
 * Total Violation Count Display Component
 * @param {String} count
 * @returns {React.Component}
 */
export const ViolationCount = ({count}) => (
    <h3>Number of Violations:  <span className="f2">{count}</span></h3>
);

ViolationCount.propTypes = {
  count: React.PropTypes.string
};

export default ViolationCount;


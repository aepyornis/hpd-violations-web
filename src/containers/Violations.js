import React from 'react';
import { connect } from 'react-redux';
import {ViolationSquares} from '../components/ViolationSquares';
import ViolationCount from '../components/ViolationCount';
import {isUndefined, toString} from 'lodash';
import {violations as style} from '../style';

/**
 * Violations display component
 * @param {Array} violations
 * @returns {React.Component} 
 */
export const Violations = ({violations, visible}) => {
  if (visible) {
    return <div className="row" style={style.container}>
      <ViolationCount count={toString(violations.length)} />
      <ViolationSquares violations={violations}/></div>;
  } else {
    return <span></span>;
  }
};

export const mapStateToProps = state => {
  return {
    visible: (state.violations.status === 'VIOLATION_FOUND'),
    violations: state.violations.result
  };
};

export default connect(mapStateToProps)(Violations);

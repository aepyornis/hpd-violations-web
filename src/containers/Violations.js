import React from 'react';
import { connect } from 'react-redux';
import {ViolationSquares} from '../components/ViolationSquares';
import {isUndefined} from 'lodash';


/**
 * Violations display component
 * @param {Array} violations
 * @returns {React.Component} 
 */
export const Violations = ({violations}) => {
  return (
    <div>
      <ViolationSquares violations={violations}/>
    </div>
  );
};

const mapStateToProps = state => {
  if (isUndefined(state.violations.result)) {
    return {violations: []};
  } 
  return {
    violations: state.violations.result
  };
}

export default connect(mapStateToProps)(Violations);

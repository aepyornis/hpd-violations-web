import React from 'react';
import { connect } from 'react-redux';
import ViolationSquares from '../components/ViolationSquares';
import ViolationCount from '../components/ViolationCount';
import {ViolationList} from '../components/ViolationList';
import ViolationClickMessage from '../components/ViolationClickMessage';
import {isUndefined, toString, filter} from 'lodash';
import {violations as style} from '../style';


/**
 * Filter Violations according to their violationclass
 * @param {Array} - List of classes to select
 * @param {Array} - List of violations
 * @return {Array}
 */
export const filterViolations = (selectedClasses, violations) =>{
  return filter(violations, v => selectedClasses.includes(v.violationclass));
};


/**
 * Violations display component <ViolationList violations={}/>
 * @param {Array} violations
 * @returns {React.Component} 
 */
export const Violations = ({violations, visible, filteredViolations, showClickMessage}) => {
  if (visible) {
    return <div className="row" style={style.container}>
      <ViolationCount count={toString(violations.length)} />
      <ViolationSquares violations={violations}/>
      { (showClickMessage) ? <ViolationClickMessage /> : <span></span> }
      <ViolationList violations={filteredViolations} />
      </div>;
  } else {
    return <span></span>;
  }
};

export const mapStateToProps = state => {
  return {
    visible: (state.violations.status === 'VIOLATION_FOUND'),
    showClickMessage: (state.violationClassFilter.length === 0),
    violations: state.violations.result,
    filteredViolations: filterViolations(state.violationClassFilter, state.violations.result)
  };
};

export default connect(mapStateToProps)(Violations);

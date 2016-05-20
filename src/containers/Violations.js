import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import ViolationSquares from '../components/ViolationSquares';
import ViolationCount from '../components/ViolationCount';
import {ViolationList} from '../components/ViolationList';
import ViolationClickMessage from '../components/ViolationClickMessage';
import OpenAllToggle from '../components/OpenAllToggle';
import {isUndefined, toString, filter} from 'lodash';
import {violations as style} from '../style';

export const openAllFilter = (status, violations) =>{
  return (status === 'ALL') ? violations : filter(violations, v => v.currentstatusid !== 19);
};

export const violationClassFilter = (selectedClasses, violations) =>{
  return filter(violations, v => selectedClasses.includes(v.violationclass));
};

/**
 * Filters Violations based on toggleStatus and selected Violation Classes
 * @param {String} toggleStatus
 * @param {Array} violationClassFilter
 * @param {Array} violations
 */
export const filterViolations = (toggleStatus, selectedClasses, violations) => {
  return violationClassFilter(selectedClasses, openAllFilter(toggleStatus, violations));
};

/**
 * Violations display component <ViolationList violations={}/>
 * @param {Array} violations
 * @returns {React.Component} 
 */
export const Violations = (
    {violations, visible, filteredViolations, showClickMessage, dispatch}
) => {
  if (visible) {
    return (<div className="row" style={style.container}>
      <ViolationCount count={toString(violations.length)} />
      <OpenAllToggle />
      <ViolationSquares violations={violations}/>
      { (showClickMessage) ? <ViolationClickMessage /> : <span></span> }
      <ViolationList violations={filteredViolations} dispatch={dispatch}/>
      </div>);
  } else {
    return <span></span>;
  }
};

Violations.propTypes = {
  violations: PropTypes.array,
  visible: PropTypes.bool,
  filteredViolations: PropTypes.array,
  showClickMessage: PropTypes.bool,
  dispatch: PropTypes.func
};

export const mapStateToProps = state => {
  return {
    visible: (state.violations.status === 'VIOLATION_FOUND'),
    showClickMessage: (state.violationClassFilter.length === 0),
    violations: openAllFilter(state.toggleStatus, state.violations.result),
    filteredViolations: filterViolations(state.toggleStatus, state.violationClassFilter, state.violations.result)
  };
};

export default connect(mapStateToProps)(Violations);

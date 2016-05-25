import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { toString } from 'lodash';
import ViolationSquares from '../components/ViolationSquares';
import ViolationCount from '../components/ViolationCount';
import { ViolationList } from '../components/ViolationList';
import ViolationClickMessage from '../components/ViolationClickMessage';
import OpenAllToggle from '../components/OpenAllToggle';
import InfoCard from '../components/InfoCard';
import { openAllFilter, filterViolations} from '../util/filterViolations';

/**
 * Violations display component
 * @param {Array} violations - List of all or open violations
 * @param {Array} filteredViolations - List of vioaltions filtered to those toggled
 * @param {Boolean} showClickMessage -
 * @param {Array} violationClassFilter  - which violations classes are toggled
 * @param {function} dispatch
 * @returns {React.Component} 
 */
export const Violations = ({
    violations, visible, filteredViolations, showClickMessage, violationClassFilter, dispatch
}) => {
  if (visible) {
    return (
      <div className="mv100 tc" >
        <ViolationCount count={toString(violations.length)} />
        <OpenAllToggle />
        <ViolationSquares violations={violations} violationClassFilter={violationClassFilter} />
        { (showClickMessage) ? <ViolationClickMessage /> : <span></span> }
        <ViolationList violations={filteredViolations} dispatch={dispatch}/>
        <InfoCard />
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
  violationClassFilter: PropTypes.array,
  dispatch: PropTypes.func
};

export const mapStateToProps = state => {
  return {
    visible: (state.violations.status === 'VIOLATION_FOUND'),
    showClickMessage: (state.violationClassFilter.length === 0),
    violationClassFilter: state.violationClassFilter,
    violations: openAllFilter(state.toggleStatus, state.violations.result),
    filteredViolations: filterViolations(state.toggleStatus, state.violationClassFilter, state.violations.result)
  };
};

export default connect(mapStateToProps)(Violations);

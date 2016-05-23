import {filter} from 'lodash';

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

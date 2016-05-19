/**
 * Violation Click Action 
 * @param {String} violationclass
 * @returns {Object} 
 */
export const violationClick = (violationclass) => {
  return {
    type: 'VIOLATION_CLICK',
    violationClassFilter: violationclass
  };
};

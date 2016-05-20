/**
 * Toggles between open and closed violations
 * @param {String}  - 'ALL' or 'OPEN'
 * @returns {Object} 
 */
export const toggleOpenClosed = (toggleStatus) => {
  return {
    type: 'TOGGLE_OPEN_CLOSED',
    toggleStatus: toggleStatus
  };
};

export default toggleOpenClosed;

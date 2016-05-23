/**
 * Open or Close Info Card
 * @param {string|object} -  'CLOSE' or {violationObject}
 * @returns {Object} 
 */
export const toggleInfoCard = (violationOrClose) => {
  return {
    type: 'TOGGLE_INFO_CARD',
    infoCard: violationOrClose
  };
};

export default toggleInfoCard;

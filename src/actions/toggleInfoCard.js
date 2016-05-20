/**
 * Open or Close Info Card
 * @param {string} - 'OPEN' or 'CLOSE'
 * @returns {Object} 
 */
export const toggleInfoCard = (status) => {
  return {
    type: 'TOGGLE_INFO_CARD',
    infoCardVisible: (status === 'OPEN') ? true : false
  };
};

export default toggleInfoCard;

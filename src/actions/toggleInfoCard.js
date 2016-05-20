/**
 * Open or Close Info Card
 * @param {string|int} - i
 * @returns {Object} 
 */
export const toggleInfoCard = (indexOrClose) => {
  return {
    type: 'TOGGLE_INFO_CARD',
    infoCard: indexOrClose
  };
};

export default toggleInfoCard;

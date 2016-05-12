import React, { PropTypes} from 'react';

const Display = ({address}) => {
  let a = JSON.stringify(address);
  return (
      <p>{a}</p>
  );
};

// Display.propTypes = { 
//    address: PropTypes.string.isRequired 
// };

export default Display;

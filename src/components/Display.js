import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const Display = ({input}) => {
  let a = JSON.stringify(input);
  return (
      <p>{a}</p>
  );
};

// Display.propTypes = { 
//    address: PropTypes.string.isRequired 
// };




export default Display;

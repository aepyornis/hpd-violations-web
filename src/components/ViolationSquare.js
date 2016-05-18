import React, {PropTypes} from 'react';
import {violationSquare} from '../style';


/**
 * Square to hold  
 * @param {String} violationclass
 * @param {String|Int} count
 */
export const ViolationSquare = ({violationclass, count}) => {
   return (
    <div style={violationSquare}>
      <h3>{violationclass}</h3>
      <h3>{count}</h3>
  </div>
  );
}

ViolationSquare.propTypes = {
  violationclass: PropTypes.string,
  count: PropTypes.string
};




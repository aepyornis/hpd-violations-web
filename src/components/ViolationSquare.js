import React, {PropTypes} from 'react';
import {violationSquare} from '../style';


const colorPicker = (violationclass) => {
  switch (violationclass){
  case 'C':
    return '#8c96c6';
  case 'I':
    return '#9ebcda';
  case 'B':
    return '#bfd3e6';
  case 'A':
    return '#e0ECG4';
  default:
   return '';
  };
};

const colorPickerStyle = (violationclass) => ({backgroundColor: colorPicker(violationclass)});

/**
 * Square to hold  
 * @param {String} violationclass
 * @param {String|Int} count
 */
export const ViolationSquare = ({violationclass, count}) => {
  const style = Object.assign({},violationSquare.container,colorPickerStyle(violationclass));
   return (
    <div style={style} >
       <h3 style={violationSquare.h3}>{violationclass}</h3>
       <h3 style={violationSquare.h3}>{count}</h3>
  </div>
  );
};

ViolationSquare.propTypes = {
  violationclass: PropTypes.string,
  count: PropTypes.string
};




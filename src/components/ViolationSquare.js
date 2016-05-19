import React, {PropTypes} from 'react';
import {violationSquare} from '../style';
import { violationClick } from '../actions/violationClick';


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
 * Display of violation class and count
 * @param {String} violationclass
 * @param {String|Int} count
 * @param {Function} onClick 
 */
export const ViolationSquare = ({violationclass, count, dispatch}) => {
  const style = Object.assign({},violationSquare.container,colorPickerStyle(violationclass));
  const wrappedClick = () => dispatch(violationClick(violationclass));
  return (
       <div className='violation-quare' style={style} onClick={wrappedClick}>
       <h3 style={violationSquare.h3}>{violationclass}</h3>
       <h3 style={violationSquare.h3}>{count}</h3>
  </div>
  );
};

ViolationSquare.propTypes = {
  violationclass: PropTypes.string,
  count: PropTypes.string,
  dispatch: PropTypes.func
};




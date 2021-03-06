import React, {PropTypes} from 'react';
import { violationClick } from '../actions/violationClick';
import {includes} from 'lodash';

const rgba = (r,g,b) => `rgba(${r},${g},${b}, 0.7)`;

const colorPicker = (violationclass) => {
  switch (violationclass){
  case 'C':
    return rgba(231,41,138);
  case 'I':
    return rgba(223,101,176);
  case 'B':
    return rgba(201,148,199);
  case 'A':
    return rgba(212,185,218);
  default:
   return '';
  };
};

const colorPickerStyle = violationclass => ({backgroundColor: colorPicker(violationclass)});

export const classer = (violationclass, violationClassFilter) => {
  const baseClass = "dib h4 w4 cursor-pointer ba b--dashed bw1 b--dark-gray ma3 violation-square ";
  return includes(violationClassFilter, violationclass) ? 
    (baseClass + 'violation-class-selected') : baseClass;
};



/**
 * Display of violation class and count
 * @param {String} violationclass
 * @param {String|Int} count
 * @param {Function} onClick 
 */
export const ViolationSquare = ({violationclass, count, dispatch, violationClassFilter}) => {
   const wrappedClick = () => dispatch(violationClick(violationclass));
  return (
      <div className={classer(violationclass, violationClassFilter)} 
             style={colorPickerStyle(violationclass)} 
             onClick={wrappedClick}>
      <h1 className="mb2 mt1">{violationclass}</h1>
      <h1 className="ma0">{count}</h1>
      <span className="ma0 f6 i gray-text">violations</span>
  </div>
  );
};

ViolationSquare.propTypes = {
  violationclass: PropTypes.string,
  violationClassFilter: PropTypes.array,
  count: PropTypes.string,
  dispatch: PropTypes.func
};

ViolationSquare.defaultProps = {
  violationClassFilter: []
};


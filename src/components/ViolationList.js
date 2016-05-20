import React, {PropTypes} from 'react';
import {capitalize} from 'lodash';
import {violationList as style} from '../style';


export const ViolationItem = ({novdescription, currentstatus, violationclass}) =>{
    return (
        <li style={style.item }>
        <b><span style={style.violclass}>{violationclass}: </span> 
        ({currentstatus})</b> - {capitalize(novdescription)}</li>);  
};

/**
 * Generates list of Violations
 * @param {Array} violations
 * @returns {React.Component}
 */
export const ViolationList = ({violations}) =>(
  <div style={style.container}>
    <ul>
    {violations.map( (v,i) => <ViolationItem {...v} key={i} />)}
    </ul>
  </div>
);


ViolationList.propTypes = {
  violations: PropTypes.array
};

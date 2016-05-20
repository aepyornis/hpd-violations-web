import React, {PropTypes} from 'react';
import {capitalize} from 'lodash';
import {violationList as style} from '../style';
import toggleInfoCard from '../actions/toggleInfoCard';

export const ViolationItem = ({novdescription, currentstatus, violationclass, clickAction}) =>{
    return (
        <li style={style.item }
            onClick={()=> clickAction()}
        >
        <b><span style={style.violclass}>{violationclass}: </span> 
        ({currentstatus})</b> - {capitalize(novdescription)}</li>);  
};

/**
 * Generates list of Violations
 * @param {Array} violations
 * @returns {React.Component}
 */
export const ViolationList = ({violations, dispatch}) =>(
  <div style={style.container}>
    <ul>
    {violations.map( (v,i) => <ViolationItem {...v} key={i} clickAction={()=> dispatch(toggleInfoCard(i)) }/>)}
    </ul>
  </div>
);


ViolationList.propTypes = {
  violations: PropTypes.array,
  dispatch: PropTypes.func
};

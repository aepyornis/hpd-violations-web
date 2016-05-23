import React, {PropTypes} from 'react';
import {capitalize} from 'lodash';
import toggleInfoCard from '../actions/toggleInfoCard';

export const ViolationItem = ({novdescription, currentstatus, violationclass, clickAction}) =>{
    return (
        <li className="tl pb2 cursor-pointer mw7 truncate violation-li pt1 pl1"
            onClick={()=> clickAction()}>
        <b><span className="red">{violationclass}: </span>
        ({currentstatus})</b> - {capitalize(novdescription)}</li>);  
};

/**
 * Generates list of Violations
 * @param {Array} violations
 * @returns {React.Component}
 */
export const ViolationList = ({violations, dispatch}) =>(
    <div className="db cent">
    <ul className="list cent mw7">
    {violations.map( (v,i) => <ViolationItem {...v} key={i} clickAction={()=> dispatch(toggleInfoCard(v)) }/>)}     
    </ul>
  </div>
);


ViolationList.propTypes = {
  violations: PropTypes.array,
  dispatch: PropTypes.func
};

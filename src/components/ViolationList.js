import React from 'react';



export const ViolationItem = ({violationclass, currentstatus}) =>{
  return <li><b>{violationclass}</b> - {currentstatus}</li>;  
};

/**
 * Generates list of Violations
 * @param {Array} violations
 * @returns {React.Component}
 */
export const ViolationList = ({violations}) =>(
  <div>
    <ul>
    {violations.map( (v,i) => <ViolationItem {...v} key={i} />)}
    </ul>
  </div>
);

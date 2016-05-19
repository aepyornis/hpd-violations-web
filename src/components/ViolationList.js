import React, {PropTypes} from 'react';

export const ViolationItem = ({novdescription, currentstatus}) =>{
  return <li>({currentstatus}) - {novdescription}</li>;  
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


ViolationList.propTypes = {
  violations: PropTypes.array
};

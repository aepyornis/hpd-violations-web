import React from 'react';
import {ViolationSquare }from '../components/ViolationSquare';
import {filter, toString} from 'lodash';

// four types of violations "C", "I", "B", "A"

/**
 * Turns a list of Violations in to an array of ViolationSquare Elements
 * @param {Array} violations
 * @returns {Array} 
 */
export const makeSquares = (violations) => ['C', 'I', 'B', 'A']
    .map( violClass => ({
      violationclass: violClass,
      count: toString(filter(violations, {violationclass: violClass}).length)}))
  .map( (info, i) => <ViolationSquare  {...info} key={i}/>);


export const Violations = ({}) => {
 

};


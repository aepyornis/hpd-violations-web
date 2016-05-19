import React, {PropTypes} from 'react';
import {ViolationSquare } from './ViolationSquare';
import {filter, toString, isUndefined} from 'lodash';

/**
 * Turns a list of Violations into an array of props used by ViolationSquare 
 * @param {Array} violations
 * @returns {Array} 
 */
export const squareProps = (violations) => ['C', 'I', 'B', 'A']
  .map( violClass => ({
    violationclass: violClass,
    count: toString(filter(violations, {violationclass: violClass}).length)}));

/**
 * Violation Squares
 * @param {Array} violations
 * @returns {React.Component} 
 */
export const ViolationSquares = ({violations}) => (
    <div>
    {squareProps(violations).map( (info, i) => <ViolationSquare {...info} key={i} />)}
  </div> 
);

ViolationSquares.propTypes = {
  violations: PropTypes.array.isRequired
};

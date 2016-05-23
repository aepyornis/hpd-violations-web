import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import {ViolationSquare} from './ViolationSquare';
import {filter, toString} from 'lodash';
import { violationClick } from '../actions/violationClick';


export const wrapDispatchWithAction = (dispatch) => (x) => dispatch(violationClick(x));

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
export const ViolationSquares = ({violations, dispatch}) => (
  <div>
    {squareProps(violations).map((info, i) =><ViolationSquare {...info} key={i} dispatch={dispatch}/>)}
  </div> 
);

ViolationSquares.propTypes = {
  violations: PropTypes.array.isRequired,
  dispatch: PropTypes.func
};

export default connect()(ViolationSquares);

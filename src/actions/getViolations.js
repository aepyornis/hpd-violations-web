import {violationsFetch} from '../util/fetch';
import {has} from 'lodash';

/**
 * Violations redux action
 * @param {string} status
 * @param {string|object} [result=''] 
 * @returns {object} 
 */
export const violationsAction = (status, result = []) => {
  return {
    type: "VIOLATION",
    status: status,
    result: result
  };
};

/**
 * Dispatches VIOLATION_NOT_FOUND if no violations are found.
 * Otherwise it dispatches VIOLATIONS_FOUND
 * @param {function} dispatch
 * @param {object} res
 */
export const handleResult = (dispatch, res) => {
  if (!Array.isArray(res) || res.length === 0) {
    dispatch(violationsAction('VIOLATION_NOT_FOUND', res));
  } else {
    dispatch(violationsAction('VIOLATION_FOUND', res));
  }
};

/**
 * Dispatches VIOLATION_NETWORK_ERROR
 * @param {function} dispatch
 * @param {object} res
 */
export const handleErr = (dispatch, err) => dispatch(violationsAction('VIOLATION_NETWORK_ERROR', err));

/**
 * Get Violations 'Thunk'
 * 
 * @param {String} bbl
 * @returns {Promise} 
 */
export const getViolations = (bbl) => {
  return (dispatch) => {
    dispatch(violationsAction('VIOLATION_IN_PROGRESS'));
    return violationsFetch(bbl)
      .then(res => res.data)
      .then(res => handleResult(dispatch, res))
      .catch( err => handleErr(dispatch, err));
  };
};

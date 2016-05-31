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
 * Dispatches VIOLATION_NOT_FOUND if server returns object with 'error' field, otherwise it dispatches VIOLATION_FOUND
 * @param {function} dispatch
 * @param {object} res
 */
export const handleResult = (dispatch, res) => {
  if (has(res, 'error')) {
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
 * @returns {} 
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

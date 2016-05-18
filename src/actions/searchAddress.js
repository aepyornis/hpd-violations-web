import {geoclientFetch} from '../util/fetch';

/**
 * geoclient redux action
 * @param {string} status
 * @param {string|object} result
 * @returns {object} 
 */
export const geoclient = (status, result = {}) => {
  return {
    type: 'GEOCLIENT',
    status: status,
    result: result
  };
};

/**
 * Determines if an object contains an address object with string field bbl
 * @param {object}
 * @returns {boolean}
 */
export const hasBBL = obj => (typeof obj['address']['bbl'] === 'string');

/**
 * 
 * @returns {object}
 */
export const forgotToSelectBoro = () => geoclient('FORGOT_TO_SELECT_BORO');

/**
 * Dispatches 'DONE_FOUND' if the search worked or 'DONE_NOT_FOUND' if it  was not successful.
 * @param {function} dispatch
 * @param {object} result
 */
export const handleResult = (dispatch, result) => (hasBBL(result)) ? 
    dispatch(geoclient('DONE_FOUND', result)) :
    dispatch(geoclient('DONE_NOT_FOUND', result));

/**
 * dispatches 'FAILED' in case of network error
 * @param {function} dispatch
 * @param {object} err
 */
export const handleErr = (dispatch, err) => dispatch(geoclient('FAILED', err));

/**
 * This is the "Thunk" for the address search.
 * It returns an a function that returns a promise that will triggers dispatches based on the result of the get request. 
 * @param {object} address
 * @returns {function} 
 */
export const searchAddress = (address) => {
  return (dispatch) => {
    dispatch(geoclient('IN_PROGRESS'));
    return geoclientFetch(address.houseNumber, address.street, address.boro)
      .then(res => res.data )
      .then(res => handleResult(dispatch, res))
      .catch( err => handleErr(dispatch, err));
  };
};


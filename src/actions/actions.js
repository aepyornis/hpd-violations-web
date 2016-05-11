import {geoclientFetch} from '../util/fetch';

export const submitAddress = (address) => {
  return {
    type: 'SUBMIT_ADDRESS',
    address: address
  };
};

export const geoclient = (status, result = '') => {
  return {
    type: 'GEOCLIENT',
    status: status,
    result: result
  };
};

// obj -> boolean
// determines if an object contains a string field bbl
const hasBBL = obj => (typeof obj['bbl'] === 'string');

// obj -> string.
// extracts reason in string format for why the address search failed 
// from the geoclient json response.
const problemWithAddress = result => {};

// Dispatches 'DONE_FOUND' if the search worked or
// 'DONE_NOT_FOUND' if it  was not successful.
const handleResult = (dispatch, result) => {
  (hasBBL(result)) ? 
    dispatch(geoclient('DONE_FOUND'), result) :
    dispatch(geoclient('DONE_NOT_FOUND', problemWithAddress(result));
};

// dispatches 'FAILED' in case of network error
const handleErr = (dispatch, err) => {};


/**
 * This is the "Thunk" for the address search.
 * It returns an a function that returns a promise that will triggers
 * dispatches based on the result of the get request.
 */
export const searchAddress = (address) => {
  return (dispatch) => {
    dispatch(geoclient('IN_PROGRESS'));
    return geoclientFetch(address.houseNumber, address.street, address.boro)
      .then(res => handleResult(dispatch, res))
      .catch( err => handleErr(dispatch, err));
  };
};

/*
Address State:
{
 address: {
  houseNumber: '',
  street: '',
  boro: ''
 },


{
 geoclient: {
    status: 'IN_PROGRESS',
  }
}
{
 geoclient: {
 status: 'DONE_FOUND',
 result: {
    bbl: "012345678910",
    [other fields]?
 }

{
 status: 'DONE_NOT_FOUND',
 result: ''
}

{
 status: 'FAILED',
 result: ''
}
SEARCH_IN_PROGRESS, DONE_FOUND, DONE_NOT_FOUND, FAILED
*/

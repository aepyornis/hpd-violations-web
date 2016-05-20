//import { combineReducers } from 'redux';
import {reject} from 'lodash';

const initState = require('../../init_state1.js');

const defaultState = {
  violations: {
    status: 'INIT'
  },
  geoclient: {
    status: 'INIT',
    result: {
      address: {}
    }
  },
  violationClassFilter: [],
  toggleStatus: 'ALL'
};


export const addOrRemove = (arr ,item) => arr.includes(item) ? 
  reject(arr, (i) => i === item) :
  arr.concat(item);


/**
 * updates violationClassFilter Array
 * @param {object} state
 * @param {object} action
 */
export const violationClick = (state, action) => Object.assign({},state, 
    {violationClassFilter: addOrRemove(state.violationClassFilter, action.violationClassFilter)});


export const reducer = (state = initState, action) => {
  switch (action.type) {
  case 'VIOLATION':
    return Object.assign({}, state, {violations: action});
  case 'GEOCLIENT':
    return Object.assign({}, state, {geoclient: action});
  case 'VIOLATION_CLICK':
    return violationClick(state, action);
  case 'TOGGLE_OPEN_CLOSED':
    return Object.assign({}, state, {toggleStatus: action.toggleStatus});
  default:
    return state;
  };
};

export default reducer;


/*
 
 Violation Status: 'INIT', 'VIOLATION_NOT_FOUND', 'VIOLATION_IN_PROGRESS' 'VIOLATION_FOUND', 'VIOLATION_NETWORK_ERROR'
 geoclient Status: 'INIT', 'FORGOT_TO_SELECT_BORO', 'IN_PROGRESS', 'DONE_FOUND', 'DONE_NOT_FOUND', 'FAILED'

*/

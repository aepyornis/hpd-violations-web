import {reject} from 'lodash';

// for testing:
// const initState = require('../../init_state1.js');

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
  toggleStatus: 'ALL',
  infoCard: 'CLOSE'
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


export const reducer = (state = defaultState, action) => {
  switch (action.type) {
  case 'VIOLATION':
    return Object.assign({}, state, {violations: action});
  case 'GEOCLIENT':
    return Object.assign({}, state, {geoclient: action});
  case 'VIOLATION_CLICK':
    return violationClick(state, action);
  case 'TOGGLE_OPEN_CLOSED':
    return Object.assign({}, state, {toggleStatus: action.toggleStatus});
  case 'TOGGLE_INFO_CARD':
    return Object.assign({}, state, {infoCard: action.infoCard});
  case 'OPEN_SIDEBAR':
    return Object.assign({}, state, {sidebarOpen: true});
  case 'CLOSE_SIDEBAR':
    return Object.assign({}, state, {sidebarOpen: false});
  default:
    return state;
  };
};

export default reducer;


/*
 
 Violation Status: 'INIT', 'VIOLATION_NOT_FOUND', 'VIOLATION_IN_PROGRESS' 'VIOLATION_FOUND', 'VIOLATION_NETWORK_ERROR'
 geoclient Status: 'INIT', 'FORGOT_TO_SELECT_BORO', 'IN_PROGRESS', 'DONE_FOUND', 'DONE_NOT_FOUND', 'FAILED'

*/

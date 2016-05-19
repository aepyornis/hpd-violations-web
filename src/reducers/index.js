//import { combineReducers } from 'redux';

const defaultState = {
  violations: {
    status: 'INIT'
  },
  geoclient: {
    status: 'INIT',
    result: {
      address: {}
    }
  }
};


export const reducer = (state = defaultState, action) => {
  switch (action.type) {
  case 'VIOLATION':
    return Object.assign({}, state, {violations: action});
  case 'GEOCLIENT':
    return Object.assign({}, state, {geoclient: action});
  default:
    return state;
  };
};

export default reducer;


/*
 
 Violation Status: 'INIT', 'VIOLATION_NOT_FOUND', 'VIOLATION_IN_PROGRESS' 'VIOLATION_FOUND', 'VIOLATION_NETWORK_ERROR'
 geoclient Status: 'INIT', 'FORGOT_TO_SELECT_BORO', 'IN_PROGRESS', 'DONE_FOUND', 'DONE_NOT_FOUND', 'FAILED'

*/

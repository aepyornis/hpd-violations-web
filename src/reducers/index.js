//import { combineReducers } from 'redux';

const defaultState = {};

export const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'SUBMIT_ADDRESS':
      return Object.assign({}, state, {
        address: action.address
      });
    case 'GEOCLIENT':
      if (action.status === 'DONE_FOUND') {
        return Object.assign({}, state, {
          status: action.status,
          result: action.result
        });
      } else {
        return state;
      }
    default:
      return state;
  }
}

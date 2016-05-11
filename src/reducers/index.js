//import { combineReducers } from 'redux';

const defaultState = {
  address: ''
};

export const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'SUBMIT_ADDRESS':
      return Object.assign({}, state, {
        address: action.address
      });
    default:
      return state;
  }
}

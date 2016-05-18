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

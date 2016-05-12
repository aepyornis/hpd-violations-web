import { combineReducers } from 'redux';
import geoclientReducer from './geoclient';
import violationsReducer from './violations';

const defaultState = {};

export default combineReducers({
  geoclient: geoclientReducer,
  violations: violationsReducer
});


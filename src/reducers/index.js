import { combineReducers } from 'redux';
import { locationReducer } from './locationReducer';
import { weatherReducer } from './weatherReducer';

export default combineReducers({
  locations: locationReducer,
  weathers: weatherReducer
});

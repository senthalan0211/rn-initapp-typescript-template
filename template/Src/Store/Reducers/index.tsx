import {combineReducers} from 'redux';
import authReducer from './authReducer';
import homeReducer from './homeReducer';

const reducers = combineReducers({
  auth: authReducer,
  home:homeReducer,
  // Add more Reducers here as you want
});

export default reducers;


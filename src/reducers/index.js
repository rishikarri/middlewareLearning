import { combineReducers } from 'redux';
import authenticationReducer from './authentication.js';

// sole purpose is to represent a boolean telling us whether or not the user is logged in or not
const rootReducer = combineReducers({
  authenticated: authenticationReducer
});

export default rootReducer;

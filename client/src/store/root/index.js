import {combineReducers} from 'redux';
import {loadingBarReducer} from 'react-redux-loading-bar';
import checker from '../checker';
import users from '../users';

const appReducer =  combineReducers({
  checker,
  users,
  loadingBar: loadingBarReducer
});

export default appReducer;

import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import {loadingBarReducer} from 'react-redux-loading-bar';
import checker from '../checker';
import users from '../users';

const createRootReducer = (history) => combineReducers({
  checker,
  users,
  router:     connectRouter(history),
  loadingBar: loadingBarReducer
});

export default createRootReducer;

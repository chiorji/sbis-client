import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import {loadingBarReducer} from 'react-redux-loading-bar';
import checker from '../checker';
import staff from '../staff';

const createRootReducer = (history) => combineReducers({
  checker,
  staff,
  router:     connectRouter(history),
  loadingBar: loadingBarReducer
});

export default createRootReducer;

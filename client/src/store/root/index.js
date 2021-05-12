import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import {loadingBarReducer} from 'react-redux-loading-bar';
import result from '../result';
import staff from '../staff';

const createRootReducer = (history) => combineReducers({
  result,
  staff,
  router:     connectRouter(history),
  loadingBar: loadingBarReducer
});

export default createRootReducer;

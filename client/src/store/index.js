import {createStore, applyMiddleware} from 'redux';
import {createBrowserHistory} from 'history';
import {routerMiddleware} from 'connected-react-router';
import {composeWithDevTools} from 'redux-devtools-extension';
import {loadingBarMiddleware} from 'react-redux-loading-bar';
import {throttle} from 'lodash';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import createRootReducer from './root';
import {loadState, saveState} from './sessionStorage';
import sagas from './sagas';
// TODO: Add session timing via cookie
export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = composeWithDevTools({
  trace:      true,
  traceLimit: 25
});

const getMiddleware = () => {
  if (process.env.NODE_ENV === 'production') {
    return applyMiddleware(
      loadingBarMiddleware(),
      routerMiddleware(history),
      sagaMiddleware,
      thunk
    );
  } else {
    return applyMiddleware(
      loadingBarMiddleware(),
      routerMiddleware(history),
      sagaMiddleware,
      thunk,
      createLogger()
    );
  }
};

const preloadedState = loadState();
const configureStore = () => {
  const store = createStore(
    createRootReducer(history),
    preloadedState,
    composeEnhancers(getMiddleware())
  );

  store.subscribe(throttle(() => {
    saveState({
      account: {
        isLoggedIn:      store.getState().account.isLoggedIn,
        username:        store.getState().account.username,
        email:           store.getState().account.email,
        id:              store.getState().account.id,
        role:            store.getState().account.role,
        sessionInterval: 100
      }
    });
  }));
  sagaMiddleware.run(sagas);
  return store;
};

export default configureStore;

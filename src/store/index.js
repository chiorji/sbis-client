import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { throttle } from 'lodash';
import { loadingBarMiddleware } from 'react-redux-loading-bar';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import { getSession } from '../session/cookies';
import { loadState, saveState } from '../session/sessionStorage';
import createRootReducer from './root';
import sagas from './sagas';

export const history = createBrowserHistory();

let secondsRemaining = 0;
const sagaMiddleware = createSagaMiddleware();

if (getSession().expiryDate) {
  let expiry = new Date(getSession().expiryDate);
  let currentDate = new Date();
  let timeRemaining = expiry - currentDate;
  secondsRemaining = Math.floor(timeRemaining / 1e3);
}

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
        email:           store.getState().account.email,
        token:           store.getState().account.token,
        role:            store.getState().account.role,
        sessionInterval: secondsRemaining
      }
    });
  }));
  sagaMiddleware.run(sagas);
  return store;
};

export default configureStore;

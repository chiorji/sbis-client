import {createStore, applyMiddleware} from 'redux';
import {createBrowserHistory} from 'history';
import {routerMiddleware} from 'connected-react-router';
import {composeWithDevTools} from 'redux-devtools-extension';
import {loadingBarMiddleware} from 'react-redux-loading-bar';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import createRootReducer from './root';

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

const configureStore = (preloadedState={}) => {
  const store = createStore(
    createRootReducer(history),
    preloadedState,
    composeEnhancers(getMiddleware())
  );

  return store;
};

export default configureStore;

import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {loadingBarMiddleware} from 'react-redux-loading-bar';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './root';

const persistedState = {};
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = composeWithDevTools({
  trace:      true,
  traceLimit: 25
});

const store = createStore(
  rootReducer,
  persistedState,
  composeEnhancers(applyMiddleware(
    loadingBarMiddleware(),
    sagaMiddleware,
    thunk,
    logger
  ))
);

export default store;

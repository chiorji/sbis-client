import axios from 'axios';
import {takeLatest, call, put, cancel} from 'redux-saga/effects';
import endpoints from '../../request/endpoints';
import * as actions from './actions';
import types from './constants';

function* fetchStates (){
  try {
    const states = yield call(axios, endpoints.fetchStates());
    yield put(actions.fetchStatesSuccess(states.data));
  } catch (error) {
    yield(cancel());
    if (error.response?.data) {
      yield put(actions.fetchStatesFailure(error.response?.data.message));
    } else {
      yield put(actions.fetchStatesFailure(error.message));
    }
  }
}

function* watcher() {
  yield takeLatest(types.FETCH_STATES, fetchStates);
}

export default watcher;

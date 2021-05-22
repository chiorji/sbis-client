import { takeLatest,  put, cancel } from 'redux-saga/effects';
import * as actions from './actions';
import types from './constants';
import states from '../../utils/states.json';
import _lg from '../../utils/lgas.json';

function* fetchStates (){
  try {
    yield put(actions.fetchStatesSuccess(states));
  } catch (error) {
    yield(cancel());
    yield put(actions.fetchStatesFailure('Error fetching states'));
  }
}


function* fetchLgas({ payload }) {
  try {
    let lg = yield _lg.filter(lga => lga.state === payload).map(l => l.lgas)[0];
    yield put(actions.fetchLgaSuccess(lg));
  } catch (error) {
    yield(cancel());
    yield put(actions.fetchLgaFailure('Error getting LGAs'));
  }
}

function* watcher() {
  yield takeLatest(types.FETCH_LGAS, fetchLgas);
  yield takeLatest(types.FETCH_STATES, fetchStates);
}

export default watcher;

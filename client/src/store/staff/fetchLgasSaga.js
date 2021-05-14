import {takeLatest, put, cancel} from 'redux-saga/effects';
import * as actions from './actions';
import types from './constants';
import _lg from '../../utils/lgas.json';

function* fetchLgas({payload}) {
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
}

export default watcher;

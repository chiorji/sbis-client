import axios from 'axios';
import {takeLatest, call, put, cancel} from 'redux-saga/effects';
import endpoints from '../../request/endpoints';
import * as actions from './actions';
import types from './constants';

function* fetchStateLgas(payload) {
  console.log({payload}) // eslint-disable-line
  try {
    const lgas = yield call(axios, endpoints.fetchStateLgas(payload));
    yield put(actions.fetchLgaSuccess(lgas.data));
  } catch (error) {
    yield(cancel());
    yield put(actions.fetchLgaFailure(error));
  }
}

function* watcher() {
  yield takeLatest(types.FETCH_LGAS, fetchStateLgas);

}

export default watcher;

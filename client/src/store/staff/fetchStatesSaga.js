import {takeLatest,  put, cancel} from 'redux-saga/effects';
import * as actions from './actions';
import types from './constants';
import states from '../../utils/states.json';

function* fetchStates (){
  try {
    yield put(actions.fetchStatesSuccess(states));
  } catch (error) {
    yield(cancel());
    yield put(actions.fetchStatesFailure('Error fetching states'));
  }
}

function* watcher() {
  yield takeLatest(types.FETCH_STATES, fetchStates);
}

export default watcher;

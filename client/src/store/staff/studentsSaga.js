import {takeLatest, put, cancel, delay} from 'redux-saga/effects';
import {showLoading, hideLoading} from 'react-redux-loading-bar';
import * as actions from './actions';
import types from './constants';
import students from '../../utils/students.json';

function* fetchAllStudents() {
  yield put(showLoading());
  try {
    let stds = yield students;
    yield delay(3000); // TODO: remove - it simulate delayed network request
    yield put(actions.fetchAllStudentsSuccess(stds));
  } catch (error) {
    yield(cancel());
    yield put(actions.fetchAllStudentsFailure('Error getting students list'));
  } finally {
    yield put(hideLoading());
  }
}

function* watcher() {
  yield takeLatest(types.FETCH_ALL_STUDENTS, fetchAllStudents);
}

export default watcher;

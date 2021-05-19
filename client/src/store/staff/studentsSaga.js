import axios from 'axios';
import {takeLatest, put, cancel, delay, call} from 'redux-saga/effects';
import {showLoading, hideLoading} from 'react-redux-loading-bar';
import endpoints from '../../request/endpoints';
import * as actions from './actions';
import types from './constants';
import students from '../../utils/students.json';

function* registerStudent({payload}) {
  yield put(showLoading());
  try {
    const {data} = yield call(axios, endpoints.registerStudent(payload));
    yield put(actions.registerStudentSuccess(data));
    yield put(actions.showAlert({
      shouldOpen: true,
      message:    'Registration successful',
      severity:   'success'
    }));
  } catch (error) {
    if (error.response?.data) {
      yield put(actions.registerStudentFailure(error.response.data.message));
      yield put(actions.showAlert({
        shouldOpen: true,
        message:    error.response.data.message,
        severity:   'error'
      }));
    } else {
      yield put(actions.registerStudentFailure(error.message));
      yield put(actions.showAlert({
        shouldOpen: true,
        message:    error.message,
        severity:   'error'
      }));
    }
    yield (cancel());
  } finally {
    yield put(hideLoading());
  }
}

function* fetchAllStudents() {
  yield put(showLoading());
  try {
    let stds = yield students;
    yield delay(3000); // TODO: remove - it simulate delayed network request
    yield put(actions.fetchAllStudentsSuccess(stds));
  } catch (error) {
    yield put(actions.fetchAllStudentsFailure('Error getting students list'));
    yield(cancel());
  } finally {
    yield put(hideLoading());
  }
}

function* watcher() {
  yield takeLatest(types.REGISTER_STUDENT, registerStudent);
  yield takeLatest(types.FETCH_ALL_STUDENTS, fetchAllStudents);
}

export default watcher;

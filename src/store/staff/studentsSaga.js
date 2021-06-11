/* eslint-disable no-console */
import { takeLatest, put, cancel, call } from 'redux-saga/effects';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import endpoints from '../../request/endpoints';
import api from '../../request/request';
import * as actions from './actions';
import types from './constants';

function* registerStudent({ payload }) {
  yield put(showLoading());
  try {
    const { data } = yield call(api.post, endpoints.registerStudent(payload));
    yield put(actions.registerStudentSuccess(data));
    yield put(actions.showAlert({
      shouldOpen: true,
      message:    'Registration successful',
      severity:   'success'
    }));
  } catch (error) {
    yield put(actions.registerStudentFailure(error.message));
    yield put(actions.showAlert({
      shouldOpen: true,
      message:    error.message,
      severity:   'error'
    }));
    yield (cancel());
  } finally {
    yield put(hideLoading());
  }
}

function* fetchAllStudents() {
  try {
    yield put(showLoading());
    let { data } = yield call(api.get, endpoints.getStudentList(), true);
    yield put(actions.fetchAllStudentsSuccess(data.data));
  } catch (error) {
    yield put(actions.fetchAllStudentsFailure(error.message));
    yield(cancel());
  } finally {
    yield put(hideLoading());
  }
}

function* getStudent({ payload }) {
  try {
    yield put(showLoading());
    let { data } = yield call(api.get, endpoints.getStudent(payload), true);
    yield put(actions.getStudentSuccess(data.data));
  } catch (error) {
    yield put(actions.getStudentFailure(error.message));
    yield(cancel());
  } finally {
    yield put(hideLoading());
  }
}

function* watcher() {
  yield takeLatest(types.REGISTER_STUDENT, registerStudent);
  yield takeLatest(types.FETCH_ALL_STUDENTS, fetchAllStudents);
  yield takeLatest(types.FETCH_STUDENT, getStudent);
}

export default watcher;

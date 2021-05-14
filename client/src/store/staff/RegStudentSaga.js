/* eslint-disable no-console, no-unused-vars */
import axios from 'axios';
import {takeLatest, call, put, cancel} from 'redux-saga/effects';
import {showLoading, hideLoading} from 'react-redux-loading-bar';
import endpoints from '../../request/endpoints';
import * as actions from './actions';
import types from './constants';

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

function* watcher() {
  yield takeLatest(types.REGISTER_STUDENT, registerStudent);
}

export default watcher;

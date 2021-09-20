/* eslint-disable no-unused-vars, no-console */
import {
  put, cancel, takeEvery, takeLatest, call
} from 'redux-saga/effects';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import api from '../../request/request';
import * as actions from './actions';
import types from './constants';
import endpoints from '../../request/endpoints';


function* createSubject(payload) {
  try {
    yield put(showLoading());
    const { data } = yield call(api.post, endpoints.createSubject(payload));
    yield put(actions.createSubjectSuccess(data.data));
    yield put(actions.showAlert({
      shouldOpen: true,
      message:    'Request successful',
      severity:   'success'
    }));
  } catch (error) {
    yield put(actions.createSubjectFailure(error.message));
    yield put(actions.showAlert({
      shouldOpen: true,
      message:    'Request failed',
      severity:   'error'
    }));
    yield cancel();
  } finally {
    yield put(hideLoading());
  }
}

function* listSubjects() {
  try {
    yield put(showLoading());
    // const { data } = yield call(api.get, endpoints.listSubjects(), true);
    // console.log({ data });
    // yield put(actions.listSubjectsSuccess(subjects));
  } catch (error) {
    console.log({ error });
    yield put(actions.listSubjectsFailure(error.message));
    yield put(actions.showAlert({
      shouldOpen: true,
      message:    error.message,
      severity:   'error'
    }));
    yield cancel();
  } finally {
    yield put(hideLoading());
  }
}

function* updateSubject(payload) {
  try {
    yield put(showLoading());
    const { data } = call(api.put, endpoints.updateSubject(payload));
    yield put(actions.updateSubjectSuccess(data.data));
  } catch (error) {
    yield put(actions.updateSubjectFailure(error.message));
    yield put(actions.showAlert({
      shouldOpen: true,
      message:    error.message,
      severity:   'error'
    }));
    yield cancel();
  }finally {
    yield put(hideLoading());
  }
}

function* watcher() {
  yield takeEvery(types.CREATE_SUBJECT, createSubject);
  yield takeLatest(types.LIST_SUBJECTS, listSubjects);
  yield takeEvery(types.UPDATE_SUBJECT, updateSubject);
}

export default watcher;

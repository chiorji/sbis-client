/* eslint-disable no-unused-vars */
import {
  put, cancel, delay, takeEvery, takeLatest, call
} from 'redux-saga/effects';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import api from '../../request/request';
import * as actions from './actions';
import types from './constants';
import subjects from '../../utils/subjectList.json';
import endpoints from '../../request/endpoints';


function* createSubject(payload) {
  try {
    yield put(showLoading());
    const sub = yield call(api.post, endpoints.createSubject(payload));
    yield put(actions.createSubjectSuccess(sub.data));
    yield put(actions.showAlert({
      shouldOpen: true,
      message:    'Request successful',
      severity:   'success'
    }));
  } catch (error) {
    if (error.response?.data) {
      yield put(actions.createSubjectFailure(error.response.data.message));
      yield put(actions.showAlert({
        shouldOpen: true,
        message:    'Request failed',
        severity:   'error'
      }));
    } else {
      yield put(actions.createSubjectFailure(error.message));
      yield put(actions.showAlert({
        shouldOpen: true,
        message:    'Request failed',
        severity:   'error'
      }));
    }
    yield cancel();
  } finally {
    yield put(hideLoading());
  }
}

function* listSubjects() {
  try {
    yield put(showLoading());
    const list = yield call(api.get, endpoints.listSubjects(), true);
    yield put(actions.listSubjectsSuccess(subjects));
    yield put(actions.showAlert({
      shouldOpen: true,
      message:    'Request successful',
      severity:   'success'
    }));
  } catch (error) {
    if (error.response?.data) {
      yield put(actions.listSubjectsFailure(error.response.data.message));
      yield put(actions.showAlert({
        shouldOpen: true,
        message:    error.response.data.message,
        severity:   'error'
      }));
    } else {
      // !response from server(couldn't connect due to network failure)
      yield put(actions.listSubjectsFailure(error.message));
      yield put(actions.showAlert({
        shouldOpen: true,
        message:    error.message,
        severity:   'error'
      }));
    }
    yield cancel();
  } finally {
    yield put(hideLoading());
  }
}

function* updateSubject(payload) {
  try {
    yield put(showLoading());
    const upd = call(api.put, endpoints.updateSubject(payload));
    yield put(actions.updateSubjectSuccess(upd.data));
  } catch (error) {
    if (error.response?.data) {
      yield put(actions.updateSubjectFailure(error.response.data.message));
    } else {
      yield put(actions.updateSubjectFailure(error.message));
    }
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

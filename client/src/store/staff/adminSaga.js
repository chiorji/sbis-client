/* eslint-disable no-console, no-unused-vars */
import axios from 'axios';
import {takeLatest, call, put, cancel, delay} from 'redux-saga/effects';
import {showLoading, hideLoading} from 'react-redux-loading-bar';
import endpoints from '../../request/endpoints';
import * as actions from './actions';
import types from './constants';
import _list from '../../utils/staff.json';

function* addNewStaff({payload}) {
  try {
    yield put(showLoading());
    yield delay(2000);
    const mem = yield call(axios, endpoints.addNewStaff({payload}));
    yield put(actions.addStaffSuccess(mem.data));
  } catch (error) {
    if (error.response?.data) {
      yield put(actions.addStaffFailure(error.response.data.message));
    } else {
      yield put(actions.addStaffFailure(error.message));
      yield (cancel());
    }
  } finally {
    yield put(hideLoading());
  }
}

function* fetchStaffList() {
  try {
    yield put(showLoading());
    yield delay(3000);
    // const list = yield call(axios, endpoints.fetchStaffList());
    yield put(actions.fetchStaffListSuccess(_list));
  } catch (error) {
    if (error.response?.data) {
      yield put(actions.fetchStaffListFailure(error.response.data.message));
    } else {
      yield put(actions.fetchStaffListFailure(error.message));
    }
    yield(cancel());
  } finally {
    yield put(hideLoading());
  }
}

function* watcher() {
  yield takeLatest(types.ADD_STAFF, addNewStaff);
  yield takeLatest(types.FETCH_STAFF_LIST, fetchStaffList);
}

export default watcher;

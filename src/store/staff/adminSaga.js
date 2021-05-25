/* eslint-disable no-console, no-unused-vars */
import { replace } from 'connected-react-router';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import {
  call, cancel, delay, put, takeEvery, takeLatest
} from 'redux-saga/effects';
import endpoints from '../../request/endpoints';
import api from '../../request/request';
import _list from '../../utils/staff.json';
import * as actions from './actions';
import types from './constants';

function* staffLogin({ payload }){
  try {
    yield put(showLoading());
    const { data } = yield call(api.auth, endpoints.staffLogin(payload));
    yield put(actions.loginSuccess(data));
  } catch (error) {
    if (error.response) {
      yield put(actions.loginFailure(error.response.data.message));
    } else {
      yield put(actions.loginFailure(error));
    }
  } finally {
    yield put(hideLoading());
  }
}

function* signOut() {
  yield put(actions.signout());
  yield put(replace('/'));
}

function* addNewStaff({ payload }) {
  try {
    yield put(showLoading());
    yield delay(2000);
    const mem = yield call(api.post, endpoints.addNewStaff({ payload }));
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
    // const list = yield call(request.make, endpoints.fetchStaffList());
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
  yield takeEvery(types.LOGIN_REQUEST, staffLogin);
  yield takeEvery(types.SIGN_OUT, signOut);
}

export default watcher;

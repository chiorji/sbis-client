/* eslint-disable no-console */
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
import { saveSession, removeSession } from '../../session/cookies';

function* staffLogin({ payload }) {
  try {
    yield put(showLoading());
    const { data } = yield call(api.auth, endpoints.staffLogin(payload));
    yield saveSession(data, data.data.token);
    yield put(actions.loginSuccess(data));
    yield put(replace('/dashboard'));
  } catch (error) {
    if (error.message) {   // If server returns an error message
      yield put(actions.loginFailure(error.message));
    } else {
      yield put(actions.loginFailure(error));
    }
  } finally {
    yield put(hideLoading());
  }
}

function* signOut() {
  yield console.log('Signout initiated...');
  yield removeSession();
  window.location.href = '/login'; // this reloads the page, ensuring persistent data are removed
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

// Get scratch card listing
function* getCards() {
  try {
    yield put(showLoading());
    const { data: { data } } = yield call(api.get, endpoints.getCards());
    yield put(actions.getCardsSuccess(data));
  } catch (error) {
    yield put(actions.getCardsFailure(error.message));
  } finally {
    yield put(hideLoading());
  }
}
/**
 * Generates new set of scratch cards
 * @param {number} payload The quantity of scratch cards to be generated
 */
function* generateCard({ payload }) {
  try {
    yield put(showLoading());
    const { data } = yield call(api.put, endpoints.generateCards(payload));
    yield put(actions.getCardsSuccess(data.data));
  } catch (error) {
    yield put(actions.getCardsFailure(error.message));
  }finally {
    yield put(hideLoading());
  }
}
/**
 * Deletes a particular card
 * @param {string} payload card id to delete
 */
function* deleteCard({ payload }) {
  try {
    yield put(showLoading());
    yield call(api.delete, endpoints.deleteCard(payload));
    yield put(actions.deleteCardSuccess({ ...payload, msg: 'Pin deleted successfully' }));
  } catch (error) {
    yield put(actions.deleteCardFailure(error.message));
  }finally {
    yield put(hideLoading());
  }
}

function* watcher() {
  yield takeLatest(types.ADD_STAFF, addNewStaff);
  yield takeLatest(types.FETCH_STAFF_LIST, fetchStaffList);
  yield takeEvery(types.LOGIN_REQUEST, staffLogin);
  yield takeEvery(types.SIGN_OUT, signOut);
  yield takeLatest(types.GET_SCRATCH_CARDS, getCards);
  yield takeEvery(types.GENERATE_SCRATCH_CARDS, generateCard);
  yield takeEvery(types.DELETE_SCRATCH_CARD, deleteCard);
}

export default watcher;

/* eslint-disable */
import {all, call, spawn} from 'redux-saga/effects';
import states from '../staff/fetchStatesSaga';
import lgas from '../staff/fetchStatesSaga';
import regStudent from '../staff/RegStudentSaga';

export default function* () {
  const sagas = [states, lgas, regStudent];

  yield all(sagas.map(saga =>
    spawn(function* () {
      while (true) {
        try {
          yield call(saga);
          break;
        } catch (error) {
          console.log(error);
        }
      }
    })
  ));
}

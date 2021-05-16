/* eslint-disable */
import {all, call, spawn} from 'redux-saga/effects';
import states from '../staff/fetchStatesSaga';
import lgas from '../staff/fetchLgasSaga';
import regStudent from '../staff/RegStudentSaga';
import students from '../staff/studentsSaga';
import admin from '../staff/adminSaga';

export default function* () {
  const sagas = [states, lgas, regStudent, students, admin];

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

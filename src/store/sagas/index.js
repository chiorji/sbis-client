/* eslint-disable import/no-anonymous-default-export, no-console */
import { all, call, spawn } from 'redux-saga/effects';
import states from '../staff/fetchStatesSaga';
import students from '../staff/studentsSaga';
import admin from '../staff/adminSaga';
import subjects from '../staff/subjectsSaga';

export default function* () {
  const sagas = [states, students, admin, subjects];

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

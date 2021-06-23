import { push } from 'connected-react-router';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import * as actions from './actions';
import endpoints from '../../request/endpoints';
import request from '../../request/request';

/* eslint-disable no-unused-vars, no-console */
export const validatePin =  (payload) => {
  const { pin, serial } = payload;
  return dispatch => {
    dispatch(showLoading());
    request.post(endpoints
      .validatePinSerial({ pin, serial })).then(({ data }) => {
      dispatch(push(`/result?page=validated&pin=${pin}&serial=${serial}`));
      dispatch(actions.showAlert({
        message:  'Pin validated, continue to check result',
        severity: 'success'
      }));
      dispatch(hideLoading());
    }).catch (error =>  {
      dispatch(hideLoading());
      dispatch(actions.showAlert({
        message:  error.message,
        severity: 'error'
      }));
    });
  };
};

export const getResult = (payload) => {
};

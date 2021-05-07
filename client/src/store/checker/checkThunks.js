import {showLoading, hideLoading} from 'react-redux-loading-bar';
import * as actions from './actions';

/* eslint-disable no-unused-vars, no-console */
export const validatePin = (payload) => {
  return dispatch => {
    dispatch(showLoading());
    console.log(payload);
    setTimeout(() => {
      try {
        dispatch(actions.validatePinSuccess('123456789okd'));
        dispatch(actions.validateNameSuccess('Success Builders'));
        dispatch(hideLoading());
      } catch (error) {
        dispatch(actions.validateNameFailure(error));
        dispatch(actions.validatePinError(error));
      }
    }, 3000);
  };
};

export const getResult = (payload) => {
  return dispatch => {
    dispatch(showLoading());
    console.log(payload);
    setTimeout(() => {
      try {
        dispatch(actions.getResultSuccess());
        dispatch(hideLoading());
      } catch (error) {
        dispatch(actions.getResultFailure(error));
      }
    }, 3000);
  };
};

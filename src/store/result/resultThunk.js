import { push } from 'connected-react-router';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import * as actions from './actions';

/* eslint-disable no-unused-vars, no-console */
export const validatePin = (payload) => {
  const { pin, regno } = payload;
  return dispatch => {
    dispatch(showLoading());
    setTimeout(() => {
      try {
        dispatch(push(`/result?page=validated&pin=${pin}&regno=${regno}`));
        dispatch(hideLoading());
      } catch (error) {
        dispatch(actions.validateRegnoFailure(error));
        dispatch(actions.validatePinError(error));
      } finally {
        dispatch(hideLoading());
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
        dispatch(push('/result?page=display'));
        dispatch(hideLoading());
      } catch (error) {
        dispatch(actions.getResultFailure(error));
      } finally {
        dispatch(hideLoading());
      }
    }, 3000);
  };
};

import {replace} from 'connected-react-router';
import {showLoading, hideLoading} from 'react-redux-loading-bar';
import * as actions from './actions';

export const login = (payload) => {
  return dispatch => {
    const {id, username, password} = payload; // eslint-disable-line
    dispatch(actions.loginRequest());
    dispatch(showLoading());
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          dispatch(actions.loginSuccess({id, username, email: 'user@domain.com', role: 'USER'}));
          dispatch(replace('/dashboard'));
          resolve(payload);
        } catch (error) {
          dispatch(actions.loginFailure(error));
          reject(error);
        } finally {
          dispatch(hideLoading());
        }
      }, 2000);
    });
  };
};

export const signout = () => {
  return dispatch => {
    dispatch(actions.signout());
    dispatch(replace('/'));
  };
};

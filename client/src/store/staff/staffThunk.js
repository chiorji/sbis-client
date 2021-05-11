import {replace} from 'connected-react-router';
import * as actions from './actions';

export const login = (payload) => {
  return dispatch => {
    const {id, username, password}=payload;
    dispatch(actions.loginRequest());
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          dispatch(actions.loginSuccess({id, username, password}));
          dispatch(replace('/dashboard?tab=overview'));
          resolve(payload);
        } catch (error) {
          dispatch(actions.loginFailure(error));
          reject(error);
        }
      }, 2000);
    });
  };
};

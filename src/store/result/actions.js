import types from './constants';

export const getResultRequest = () => ({ type: types.GET_RESULT_REQUEST });

export const showAlert = (payload) => ({
  type: types.SHOW_RESULT_ALERT,
  payload
});

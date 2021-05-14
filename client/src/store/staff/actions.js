import types from './constants';

export const loginRequest = () => ({
  type: types.LOGIN_REQUEST
});

export const loginSuccess = (payload) => ({
  type: types.LOGIN_SUCCESS,
  payload
});

export const loginFailure = (payload) => ({
  type: types.LOGIN_FAILURE,
  payload
});

export const signout = () => ({
  type: types.SIGN_OUT
});

export const fetchStates = () => {
  return dispatch => dispatch({type: types.FETCH_STATES});
};

export const fetchStatesSuccess = (payload) => ({
  type: types.FETCH_STATES_SUCCESS,
  payload
});

export const fetchStatesFailure = (payload) => ({
  type: types.FETCH_STATES_FAILURE,
  payload
});

export const fetchLgas = (payload) => ({
  type: types.FETCH_LGAS,
  payload
});

export const fetchLgaSuccess = (payload) => ({
  type: types.FETCH_LGA_SUCCESS,
  payload
});

export const fetchLgaFailure = (payload) => ({
  type: types.FETCH_LGAS_FAILURE,
  payload
});

export const registerStudent = (payload) => ({
  type: types.REGISTER_STUDENT,
  payload
});

export const registerStudentSuccess = (payload) => ({
  type: types.REGISTER_STUDENT_SUCCESS,
  payload
});

export const registerStudentFailure = (payload) => ({
  type: types.REGISTER_STUDENT_FAILURE,
  payload
});

export const showAlert = (payload) => ({
  type: types.SHOW_ALERT,
  payload
});

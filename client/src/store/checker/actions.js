import types from './constants';

export const validatePin = () => ({
  type: types.VALIDATE_PIN_REQUEST
});

export const validatePinSuccess = (payload) => {
  return dispatch => {
    dispatch({
      type: types.VALIDATE_PIN_SUCCESS,
      payload
    });
  };
};

export const validatePinError = (payload) => {
  return dispatch => {
    dispatch({
      type: types.VALIDATE_PIN_FAILURE,
      payload
    });
  };
};

export const validateNameSuccess = (payload) => {
  return dispatch => {
    dispatch({
      type: types.VALIDATE_NAME_SUCCESS,
      payload
    });
  };
};

export const validateNameFailure = (payload) => {
  return dispatch => {
    dispatch({
      type: types.VALIDATE_NAME_FAILURE,
      payload
    });
  };
};

export const getResultSuccess = (payload) => {
  return dispatch => {
    dispatch({
      type: types.GET_RESULT_SUCCESS,
      payload
    });
  };
};

export const getResultFailure = (payload) => {
  return dispatch => {
    dispatch({
      type: types.GET_RESULT_FAILURE,
      payload
    });
  };
};

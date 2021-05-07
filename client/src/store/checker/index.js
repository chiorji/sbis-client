import types from './constants';

const initialState = {
  regno:         '',
  username:      '',
  scratchPin:    '',
  pinValidated:  false,
  nameValidated: false,
  resultReady:   false
};

const checker = (state = initialState, action) => {
  switch (action.type) {

  case types.VALIDATE_PIN_SUCCESS:
    return {
      ...state,
      scratchPin:   action.payload,
      pinValidated: true
    };

  case types.VALIDATE_PIN_FAILURE:
    return {
      ...state,
      pinValidated: false
    };

  case types.VALIDATE_NAME_SUCCESS:
    return {
      ...state,
      username:      action.payload,
      nameValidated: true
    };

  case types.VALIDATE_NAME_FAILURE:
    return {
      ...state,
      nameValidated: false
    };

  case types.GET_RESULT_SUCCESS:
    return {
      ...state,
      resultReady: true
    };

  case types.GET_RESULT_FAILURE:
    return {
      ...state,
      resultReady: false
    };

  default:
    return state;
  }
};

export default checker;

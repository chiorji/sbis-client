import types from './constants';

const initialState = {
  alert: {
    shouldOpen: false,
    severity:   '',
    message:    ''
  }
};

const checker = (state = initialState, action) => {
  switch (action.type) {

  case types.SHOW_RESULT_ALERT:
    return {
      ...state,
      alert: {
        ...state.alert,
        shouldOpen: true,
        severity:   action.payload.severity,
        message:    action.payload.message
      }
    };

  case 'HIDE_ALERT':
    return {
      ...state,
      alert: {
        shouldOpen: false,
        severity:   '',
        message:    ''
      }
    };

  case types.VALIDATE_PIN_SUCCESS:
    return {
      ...state,
      pin: action.payload
    };

  case types.VALIDATE_REGNO_SUCCESS:
    return {
      ...state,
      regno: action.payload
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

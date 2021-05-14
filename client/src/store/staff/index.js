import types from './constants';

const initialState = {
  isLoading: false,
  alert:     {
    shouldOpen: false,
    severity:   '',
    message:    ''
  }
};

const staff = (state = initialState, action) => {
  switch (action.type) {
  case types.REGISTER_STUDENT:
    return {
      ...state,
      isLoading: true
    };

  case types.REGISTER_STUDENT_SUCCESS:
    return {
      ...state,
      isLoading: false
    };

  case types.REGISTER_STUDENT_FAILURE:
    return {
      ...state,
      isLoading:    false,
      errorMessage: action.payload
    };

  case types.SHOW_ALERT:
    return {
      ...state,
      alert: {
        shouldOpen: true,
        severity:   action.payload.severity,
        message:    action.payload.message
      }
    };

  case types.HIDE_ALERT:
    return {
      ...state,
      alert: {
        shouldOpen: false,
        severity:   '',
        message:    ''
      }
    };

  default:
    return state;
  }
};

export default staff;

import types from './constants';

const initialState = {
  isLoading: false,
  alert:     {
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
      isLoading: false,
      alert:     {
        ...state.alert,
        shouldOpen: true,
        severity:   action.payload.severity,
        message:    action.payload.message
      }
    };

  case types.HIDE_ALERT:
    return {
      ...state,
      isLoading: false,
      alert:     {
        shouldOpen: false,
        severity:   '',
        message:    ''
      }
    };

  case types.GET_RESULT_REQUEST:
    return {
      ...state,
      isLoading: true
    };

  default:
    return state;
  }
};

export default checker;

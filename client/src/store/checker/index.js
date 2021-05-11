import types from './constants';

const initialState = {
  regno: '',
  pin:   ''
};

const checker = (state = initialState, action) => {
  switch (action.type) {

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

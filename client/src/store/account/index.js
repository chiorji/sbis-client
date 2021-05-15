import types from '../staff/constants';

const initialState = {
  isLoading:       false,
  isLoggedIn:      false,
  role:            'USER',
  id:              '',
  username:        '',
  email:           '',
  sessionInterval: 0, // Todo: will be set using session data
  alert:           {
    shouldOpen: false,
    severity:   '',
    message:    ''
  }
};

const account = (state = initialState, action) => {
  switch (action.type) {
  case types.LOGIN_REQUEST:
    return {
      ...state,
      isLoading: true
    };

  case types.LOGIN_SUCCESS:
    return {
      ...state,
      isLoggedIn:      true,
      role:            action.payload.role,
      username:        action.payload.username,
      email:           action.payload.email,
      sessionInterval: ''
    };

  case types.LOGIN_FAILURE:
    return {
      ...state,
      isLoggedIn: false,
      username:   '',
      id:         '',
      alert:      {
        shouldOpen: true,
        severity:   'error',
        message:    action.payload
      }
    };

  case types.SIGN_OUT:
    return {
      ...state,
      isLoggedIn:      false,
      role:            '',
      username:        '',
      email:           '',
      sessionInterval: ''
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

export default account;

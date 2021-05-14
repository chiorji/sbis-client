import types from '../staff/constants';

const initialState = {
  isLoading:       false,
  isLoggedIn:      false,
  role:            'USER',
  id:              '',
  username:        '',
  email:           '',
  sessionInterval: 0 // Todo: will be set using session data
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
      id:         ''
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

  default:
    return state;
  }
};

export default account;

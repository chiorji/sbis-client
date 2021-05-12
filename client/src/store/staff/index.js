import types from './constants';

const initialState = {
  isLoggedIn: false,
  userData:   {
    role:            'USER',
    id:              '',
    username:        '',
    email:           '',
    sessionInterval: 0 // Todo: will be set using session data
  }
};

const staff = (state = initialState, action) => {
  switch (action.type) {
  case types.LOGIN_REQUEST:
    return {
      ...state
    };

  case types.LOGIN_SUCCESS:
    return {
      ...state,
      isLoggedIn: true,
      userData:   {
        role:            action.payload.role,
        username:        action.payload.username,
        email:           action.payload.email,
        sessionInterval: ''
      }
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
      isLoggedIn: false,
      userData:   {
        role:            '',
        username:        '',
        email:           '',
        sessionInterval: ''
      }
    };

  default:
    return state;
  }
};

export default staff;

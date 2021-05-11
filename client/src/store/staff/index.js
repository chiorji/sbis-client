import types from './constants';

const initialState = {
  isLoggedIn: false,
  username:   '',
  role:       'USER',
  id:         ''
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
      ...action.payload,
      isLoggedIn: true
    };

  case types.LOGIN_FAILURE:
    return {
      ...state,
      isLoggedIn: false,
      username:   '',
      id:         ''
    };

  default:
    return state;
  }
};

export default staff;

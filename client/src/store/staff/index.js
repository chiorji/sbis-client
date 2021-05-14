import types from './constants';

const initialState = {
  isLoading: false,
  states:    [],
  lgas:      [],
  alert:     {
    shouldOpen: false,
    severity:   '',
    message:    ''
  },
  stats: {
    totalRegStudents:     0,
    totalSubjects:        0,
    totalClassListed:     0,
    totalResultsDeclared: 0,
    activeStaff:          0
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

  case types.FETCH_STATES_SUCCESS:
    return {
      ...state,
      states: action.payload
    };

  case types.FETCH_LGAS_SUCCESS:
    return {
      ...state,
      lgas: action.payload
    };

  case types.FETCH_LGAS_FAILURE:
  case types.FETCH_STATES_FAILURE:
    return {
      ...state,
      alert: {
        shouldOpen: true,
        severity:   'error',
        message:    action.payload
      }
    };
  default:
    return state;
  }
};

export default staff;

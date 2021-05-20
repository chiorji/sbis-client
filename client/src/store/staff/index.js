import types from './constants';

const initialState = {
  isLoading: false,
  states:    [],
  lgas:      [],
  subjects:  [],
  alert:     {
    shouldOpen: false,
    severity:   '',
    message:    ''
  },
  stats: {
    totalRegStudents:     1030,
    totalSubjects:        15,
    totalClassListed:     6,
    totalResultsDeclared: 34,
    activeStaff:          18,
    students:             [],
    staff:                []
  }
};

const staff = (state = initialState, action) => {
  switch (action.type) {
  case types.REGISTER_STUDENT:
  case types.FETCH_STAFF_LIST:
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

  case types.FETCH_ALL_STUDENTS:
    return {
      ...state,
      isLoading: true
    };

  case types.FETCH_ALL_STUDENTS_SUCCESS:
    return {
      ...state,
      isLoading: false,
      stats:     {...state.stats, students: action.payload}
    };

  case types.FETCH_STAFF_LIST_SUCCESS:
    return {
      ...state,
      isLoading: false,
      stats:     {...state.stats, staff: action.payload}
    };

  case types.FETCH_LGAS_FAILURE:
  case types.FETCH_STATES_FAILURE:
  case types.FETCH_ALL_STUDENTS_FAILURE:
  case types.ADD_STAFF_FAILURE:
  case types.FETCH_STAFF_LIST_FAILURE:
  case types.CREATE_SUBJECT_FAILURE:
    return {
      ...state,
      isLoading: false,
      alert:     {
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

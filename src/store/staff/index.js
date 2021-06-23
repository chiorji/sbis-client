import types from './constants';

const initialState = {
  isLoading: false,
  states:    [],
  lgas:      [],
  classList: ['Select class', 'js1', 'js2', 'js3', 'ss1', 'ss2', 'ss3' ],
  terms:     ['Select Term', 'FIRST TERM', 'SECOND TERM', 'THIRD TERM'],
  subjects:  [ {
    name:     'English Language',
    code:     '',
    category: 'General',
    teacher:  'Bright',
    id:       1
  }, {
    name:     'Mathematics',
    code:     '',
    category: 'General',
    teacher:  'Naza',
    id:       2
  }, {
    name:     'Igbo Language',
    code:     '',
    category: 'General',
    teacher:  'Kenneth',
    id:       3
  }, {
    name:     'Literature in English',
    code:     '',
    category: 'Arts',
    teacher:  'Bantu',
    id:       4
  }, {
    name:     'Biology',
    code:     '',
    category: 'Science',
    teacher:  'Bright',
    id:       5
  } , {
    name:     'Government',
    code:     '',
    category: 'Arts',
    teacher:  'Bright',
    id:       6
  }, {
    name:     'Economics',
    code:     '',
    category: 'Business',
    teacher:  'Bright',
    id:       7
  }, {
    name:     'NBST',
    code:     '',
    category: 'General',
    teacher:  'Bright',
    id:       8
  }, {
    name:     'Christian Religious Knowledge',
    code:     '',
    category: 'General',
    teacher:  'Bright',
    id:       9
  }, {
    name:     'Civic Education',
    code:     '',
    category: 'General',
    teacher:  'Bright',
    id:       10
  }, {
    name:     'Data Processing',
    code:     '',
    category: 'General',
    teacher:  'Bright',
    id:       11
  }, {
    name:     'Agricultural Science',
    code:     '',
    category: 'General',
    teacher:  'Bright',
    id:       12
  }, {
    name:     'Chemistry',
    code:     '',
    category: 'General',
    teacher:  'Bright',
    id:       13
  }, {
    name:     'Physics',
    code:     '',
    category: 'General',
    teacher:  'Bright',
    id:       14
  }, {
    name:     'Commerce',
    code:     '',
    category: 'General',
    teacher:  'Bright',
    id:       15
  }, {
    name:     'Accounting',
    code:     '',
    category: 'General',
    teacher:  'Bright',
    id:       16
  },  {
    name:     'Food and Nutrition',
    code:     '',
    category: 'General',
    teacher:  'Bright',
    id:       17
  }, {
    name:     'Geography',
    code:     '',
    category: 'General',
    teacher:  'Bright',
    id:       18
  }, {
    name:     'French',
    code:     '',
    category: 'General',
    teacher:  'Bright',
    id:       19
  }, {
    name:     'Cultural and Creative Arts',
    code:     '',
    category: 'General',
    teacher:  'Bright',
    id:       20
  } , {
    name:     'Business Studies',
    code:     '',
    category: 'General',
    teacher:  'Bright',
    id:       21
  }, {
    name:     'Further Maths',
    code:     '',
    category: 'General',
    teacher:  'Bright',
    id:       22
  }],
  pins:        [],
  studentInfo: {},
  alert:       {
    shouldOpen: false,
    severity:   '',
    message:    ''
  },
  stats: {
    sum: {
      students: 0,
      staff:    0,
      pins:     0,
      results:  0,
      subjects: 0,
      classes:  0
    },
    students: [],
    staff:    []
  }
};

const staff = (state = initialState, action) => {
  switch (action.type) {
  // returns info for a singe student
  case types.FETCH_STUDENT_SUCCESS:
    return {
      ...state,
      studentInfo: action.payload
    };
  case types.GET_STATS_SUCCESS:
    return {
      ...state,
      stats: { ...state.stats, sum: { ...state.stats.sum, ...action.payload } }
    };
  case types.REGISTER_STUDENT:
  case types.FETCH_STAFF_LIST:
  case types.GET_SCRATCH_CARDS:
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
      stats:     { ...state.stats, students: action.payload }
    };

  case types.FETCH_STAFF_LIST_SUCCESS:
    return {
      ...state,
      isLoading: false,
      stats:     { ...state.stats, staff: action.payload }
    };

  case types.ADD_STAFF_SUCCESS:
    return {
      ...state,
      isLoading: false,
      alert:     {
        shouldOpen: true,
        severity:   'success',
        message:    action.payload.message
      }
    };

    /**
    Subjects related store
  */
  case types.LIST_SUBJECTS_SUCCESS:
    return {
      ...state,
      subjects: action.payload
    };

  case types.FETCH_LGAS_FAILURE:
  case types.FETCH_STATES_FAILURE:
  case types.FETCH_ALL_STUDENTS_FAILURE:
  case types.ADD_STAFF_FAILURE:
  case types.FETCH_STAFF_LIST_FAILURE:
  case types.CREATE_SUBJECT_FAILURE:
  case types.GET_SCRATCH_CARDS_FAILURE:
  case types.DELETE_SCRATCH_CARD_FAILURE:
    return {
      ...state,
      isLoading: false,
      alert:     {
        shouldOpen: true,
        severity:   'error',
        message:    action.payload
      }
    };

  case types.GET_SCRATCH_CARDS_SUCCESS:
    return {
      ...state,
      isLoading: false,
      pins:      action.payload
    };

    // When actions perfomed on card is successful
  case types.DELETE_SCRATCH_CARD_SUCCESS:
    return {
      ...state,
      pins:  state.pins.filter(item => item.pin !== action.payload.pin),
      alert: {
        shouldOpen: true,
        severity:   'success',
        message:    action.payload.msg
      }
    };
  default:
    return state;
  }
};

export default staff;

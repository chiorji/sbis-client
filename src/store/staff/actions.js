import types from './constants';

export const loginRequest = () => ({
  type: types.LOGIN_REQUEST
});

export const loginSuccess = (payload) => ({
  type: types.LOGIN_SUCCESS,
  payload
});

export const loginFailure = (payload) => ({
  type: types.LOGIN_FAILURE,
  payload
});

export const signout = () => ({
  type: types.SIGN_OUT
});

export const fetchStates = () => {
  return dispatch => dispatch({ type: types.FETCH_STATES });
};

export const fetchStatesSuccess = (payload) => ({
  type: types.FETCH_STATES_SUCCESS,
  payload
});

export const fetchStatesFailure = (payload) => ({
  type: types.FETCH_STATES_FAILURE,
  payload
});

export const fetchLgas = (payload) => ({
  type: types.FETCH_LGAS,
  payload
});

export const fetchLgaSuccess = (payload) => ({
  type: types.FETCH_LGAS_SUCCESS,
  payload
});

export const fetchLgaFailure = (payload) => ({
  type: types.FETCH_LGAS_FAILURE,
  payload
});

export const registerStudent = (payload) => ({
  type: types.REGISTER_STUDENT,
  payload
});

export const registerStudentSuccess = (payload) => ({
  type: types.REGISTER_STUDENT_SUCCESS,
  payload
});

export const registerStudentFailure = (payload) => ({
  type: types.REGISTER_STUDENT_FAILURE,
  payload
});

export const showAlert = (payload) => ({
  type: types.SHOW_ALERT,
  payload
});

export const fetchAllStudents = () => ({
  type: types.FETCH_ALL_STUDENTS
});

export const fetchAllStudentsSuccess = (payload) => ({
  type: types.FETCH_ALL_STUDENTS_SUCCESS,
  payload
});

export const fetchAllStudentsFailure = (payload) => ({
  type: types.FETCH_ALL_STUDENTS_FAILURE,
  payload
});

export const addStaff = (payload) => ({
  type: types.ADD_STAFF,
  payload
});

export const addStaffSuccess = (payload) => ({
  type: types.ADD_STAFF_SUCCESS,
  payload
});

export const addStaffFailure = (payload) => ({
  type: types.ADD_STAFF_FAILURE,
  payload
});

export const fetchStaffList = () => ({
  type: types.FETCH_STAFF_LIST
});

export const fetchStaffListSuccess = (payload) => ({
  type: types.FETCH_STAFF_LIST_SUCCESS,
  payload
});

export const fetchStaffListFailure = (payload) => ({
  type: types.FETCH_STAFF_LIST_FAILURE,
  payload
});

// subjects
export const createSubject = (payload) => ({
  type: types.CREATE_SUBJECT,
  payload
});

export const createSubjectSuccess = (payload) => ({
  type: types.CREATE_SUBJECT_SUCCESS,
  payload
});

export const createSubjectFailure = (payload) => ({
  type: types.CREATE_SUBJECT_FAILURE,
  payload
});

export const listSubjects = (payload) => ({
  type: types.LIST_SUBJECTS,
  payload
});

export const listSubjectsSuccess = (payload) => ({
  type: types.LIST_SUBJECTS_SUCCESS,
  payload
});

export const listSubjectsFailure = (payload) => ({
  type: types.LIST_SUBJECTS_FAILURE,
  payload
});

export const updateSubject = (payload) => ({
  type: types.UPDATE_SUBJECT,
  payload
});

export const updateSubjectSuccess = (payload) => ({
  type: types.UPDATE_SUBJECT_SUCCESS,
  payload
});

export const updateSubjectFailure = (payload) => ({
  type: types.UPDATE_SUBJECT_FAILURE,
  payload
});

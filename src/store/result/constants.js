import keyMirror from 'key-mirror';

export default keyMirror({
  // First steps of result checking validation
  VALIDATE_PIN_REQUEST: null,
  VALIDATE_PIN_SUCCESS: null,
  VALIDATE_PIN_FAILURE: null,

  // Validates regno
  VALIDATE_REGNO_REQUEST: null,
  VALIDATE_REGNO_SUCCESS: null,
  VALIDATE_REGNO_FAILURE: null,

  // Second step of result checking validation
  GET_RESULT_REQUEST: null,
  GET_RESULT_SUCCESS: null,
  GET_RESULT_FAILURE: null,
  SHOW_RESULT_ALERT:  null
});

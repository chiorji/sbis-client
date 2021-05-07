import keyMirror from 'key-mirror';

export default keyMirror({
  // First steps of result checking validation
  VALIDATE_PIN_REQUEST: null,
  VALIDATE_PIN_SUCCESS: null,
  VALIDATE_PIN_FAILURE: null,

  // Name validation checks(candidate name)
  VALIDATE_NAME_REQUEST: null,
  VALIDATE_NAME_SUCCESS: null,
  VALIDATE_NAME_FAILURE: null,

  // Second step of result checking validation
  GET_RESULT_REQUEST: null,
  GET_RESULT_SUCCESS: null,
  GET_RESULT_FAILURE: null
});

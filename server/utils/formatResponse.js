/**
 *
 * @param {*} code
 * @param {*} msg
 * @param {*} success
 * @param {*} data
 */
const formatResponse = (code, msg, success, data) => {
  return {
    status:  typeof (code) !== 'number' ? 200 : code,
    message: msg ? msg.charAt(0).toUpperCase() + msg.slice(1) : 'Successful',
    success: typeof (success) === 'boolean' ? success : false,
    data:    data !== null ? data : [] // never return null
  };
};

module.exports = formatResponse;

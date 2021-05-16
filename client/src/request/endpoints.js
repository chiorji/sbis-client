/* eslint-disable */
const STATES_API_BASE = process.env.REACT_APP_STATE_API_BASE;
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export default {
  fetchStates: () => {
    return {
      url: `${STATES_API_BASE}/states`,
      method: 'GET'
    }
  },

  fetchStateLgas: (stateName) => {
    return {
      url: `${STATES_API_BASE}/states/${stateName}/details`,
      method: 'GET'
    }
  },

  registerStudent: (payload) => {
    return {
      url: `${API_BASE_URL}/register-student`,
      method: 'POST',
      body: JSON.stringify(payload)
    }
  },

  addNewStaff: (payload) => {
    return {
      url: `${API_BASE_URL}/staff/details/add`,
      method: 'POST',
      body: JSON.stringify(payload)
    }
  }
};

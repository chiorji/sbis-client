/* eslint-disable */
const STATES_API_BASE = process.env.REACT_APP_STATES_API_BASE;

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
  }
};

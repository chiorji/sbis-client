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
      url: `${API_BASE_URL}/students/register`,
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
  },

  fetchStaffList: () => {
    return {
      url: `${API_BASE_URL}/staff/details`,
      method: 'GET'
    }
  },

  createSubject: (payload) => {
    return {
      url: `${API_BASE_URL}/subjects/create`,
      method: 'POST',
      body: JSON.stringify(payload)
    }
  },

  updateSubject: (payload) => {
    return {
       url: `${API_BASE_URL}/subjects/update`,
      method: 'PUT',
      body: JSON.stringify(payload)
    }
  },
  
  /**
   * Fetches subject list
   * @param {string} level filters either senior or junior level categorized subject
   * @returns 
   */
  listSubjects: (level) => {
    return {
      url: `${API_BASE_URL}/subjects?filter=${level}`,
      method: 'GET'
    }
  }
};

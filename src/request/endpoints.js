/* eslint-disable import/no-anonymous-default-export */
const STATES_API_BASE = process.env.REACT_APP_STATE_API_BASE;
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export default {
  fetchStates: () => {
    return {
      url:    `${STATES_API_BASE}/states`,
      method: 'GET'
    };
  },

  fetchStateLgas: (stateName) => {
    return {
      url:    `${STATES_API_BASE}/states/${stateName}/details`,
      method: 'GET'
    };
  },

  registerStudent: (data) => {
    return {
      url:    `${API_BASE_URL}/api/v1/students`,
      method: 'POST',
      data
    };
  },

  addNewStaff: (data) => {
    return {
      url:    `${API_BASE_URL}/api/v1/staff`,
      method: 'POST',
      data
    };
  },

  fetchStaffList: () => {
    return {
      url:    `${API_BASE_URL}/api/v1/staff`,
      method: 'GET'
    };
  },

  createSubject: (data) => {
    return {
      url:    `${API_BASE_URL}/api/v1/subjects`,
      method: 'POST',
      data
    };
  },

  updateSubject: (data) => {
    return {
      url:    `${API_BASE_URL}/api/v1/subjects`,
      method: 'PUT',
      data
    };
  },

  /**
   * Fetches subject list
   * @param {string} level filters either senior or junior level categorized subject
   * @returns
   */
  listSubjects: (level) => {
    return {
      url:    `${API_BASE_URL}/api/v1/subjects?filter=${level}`,
      method: 'GET'
    };
  },

  staffLogin: (data) => {
    return {
      url:    `${API_BASE_URL}/api/v1/auth/login`,
      method: 'POST',
      data
    };
  },

  /**
   * Retrieve all scratch card
   * @returns
   */
  getCards: () => {
    return {
      url:    `${API_BASE_URL}/api/v1/pin/`,
      method: 'GET'
    };
  },

  /**
 * Generates and populate the database with new scratch cards
 * @param {number} data
 * @returns
 */
  generateCards: (data) => {
    return {
      url:    `${API_BASE_URL}/api/v1/pin/${data}`,
      method: 'PUT'
    };
  },

  /**
   * Deletes the specified card
   * @param {string} data
   * @returns
   */
  deleteCard: ({ pin, serial }) => {
    return {
      url:    `${API_BASE_URL}/api/v1/pin/${pin}/serial/${serial}`,
      method: 'DELETE'
    };
  }
};

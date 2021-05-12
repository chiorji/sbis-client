/* eslint-disable no-undefined */
export const loadState = () => {
  try {
    const serializedState = sessionStorage.getItem('state');
    return serializedState !== null ? JSON.parse(serializedState) : undefined;
  } catch(err) {
    return undefined;
  }
};

export const saveState = (payload) => {
  try {
    const serializedState = JSON.stringify(payload);
    sessionStorage.setItem('state', serializedState);
  } catch (err) {
    //
  }
};


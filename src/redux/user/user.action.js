// action just a function that will return a object contains type and payload
export const setCurrentUser = user => ({
  type: 'SET_CURRENT_USER',
  payload: user
});

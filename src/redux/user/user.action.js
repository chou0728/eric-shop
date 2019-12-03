import UserActionTypes from './user.types';
// action just a function that will return a object contains type and payload
export const setCurrentUser = user => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
});

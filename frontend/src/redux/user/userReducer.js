import * as actionTypes from "./actionTypes";
import { updateState } from "../utility";

const initialState = {
  user: null,
  error: null,
  loading: false,
};

const userStart = (state, action) => {
  return updateState(state, {
    error: null,
    loading: true,
  });
};

const userSuccess = (state, action) => {
  return updateState(state, {
    user: action.user,
    loading: false,
  });
};

const userFail = (state, action) => {
  return updateState(state, {
    error: action.error,
    loading: false,
  });
};

const userLogout = (state, action) => {
  return updateState(state, {
    user: null,
    error: null,
    loading: false,
  });
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_START:
      return userStart(state, action);
    case actionTypes.USER_FAIL:
      return userFail(state, action);
    case actionTypes.USER_SUCCESS:
      return userSuccess(state, action);
    case actionTypes.USER_LOGOUT:
      return userLogout(state, action);
    default:
      return state;
  }
};

export default userReducer;

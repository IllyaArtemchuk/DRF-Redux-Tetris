import * as actionTypes from "./actionTypes";
import { updateState } from "../utility";

const initialState = {
  token: null,
  error: null,
  loading: false,
};

const authStart = (state, action) => {
  return updateState(state, {
    error: null,
    loading: true,
  });
};

const authSuccess = (state, action) => {
  return updateState(state, {
    token: action.token,
    loading: false,
  });
};

const authFail = (state, action) => {
  return updateState(state, {
    error: action.error,
    loading: false,
  });
};

const authLogout = (state, action) => {
  return updateState(state, {
    token: null,
    error: null,
    loading: false,
  });
};

const authClear = (state, action) => {
  return updateState(state, {
    error: null,
  });
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return authStart(state, action);
    case actionTypes.AUTH_FAIL:
      return authFail(state, action);
    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action);
    case actionTypes.AUTH_LOGOUT:
      return authLogout(state, action);
    case actionTypes.AUTH_CLEAR:
      return authClear(state, action);
    default:
      return state;
  }
};

export default authReducer;

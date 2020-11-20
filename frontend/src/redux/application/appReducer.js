import * as actionTypes from "./actionTypes";
import { updateState } from "../utility";

const initialState = {
  size: "large",
  message: null,
};

const appWindowResize = (state, action) => {
  return updateState(state, {
    size: action.size,
  });
};

const setRedirectMessage = (state, action) => {
  return updateState(state, {
    message: action.message,
  });
};

const clearRedirectMessage = (state, action) => {
  return updateState(state, {
    message: null,
  });
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.WINDOW_RESIZE:
      return appWindowResize(state, action);
    case actionTypes.SET_REDIRECT_MESSAGE:
      return setRedirectMessage(state, action);
    case actionTypes.CLEAR_REDIRECT_MESSAGE:
      return clearRedirectMessage(state, action);
    default:
      return state;
  }
};

export default appReducer;

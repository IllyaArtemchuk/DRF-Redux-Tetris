import * as actionTypes from "./actionTypes";

export const windowResize = (size) => {
  return {
    type: actionTypes.WINDOW_RESIZE,
    size: size,
  };
};

export const setRedirectMessage = (message) => {
  return {
    type: actionTypes.SET_REDIRECT_MESSAGE,
    message: message,
  };
};
export const clearRedirectMessage = () => {
  return {
    type: actionTypes.CLEAR_REDIRECT_MESSAGE,
    message: null,
  };
};

import * as actionTypes from "./actionTypes";
import { updateState } from "../utility";

const initialState = {
  size: "large",
};

const appWindowResize = (state, action) => {
  console.log(action);
  return updateState(state, {
    size: action.size,
  });
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.WINDOW_RESIZE:
      return appWindowResize(state, action);
    default:
      return state;
  }
};

export default appReducer;

import * as actionTypes from "./actionTypes";

export const windowResize = (size) => {
  console.log("window resize size", size);
  return {
    type: actionTypes.WINDOW_RESIZE,
    size: size,
  };
};

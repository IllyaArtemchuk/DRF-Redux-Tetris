import axios from "axios";
import * as actionTypes from "./actionTypes";

export const userStart = () => {
  return {
    type: actionTypes.USER_START,
  };
};

export const userSuccess = (data) => {
  return {
    type: actionTypes.USER_SUCCESS,
    user: data,
  };
};

export const userFail = (error) => {
  return {
    type: actionTypes.USER_FAIL,
    error: error,
  };
};

export const userLogout = () => {
  return {
    type: actionTypes.USER_LOGOUT,
    user: null,
  };
};

export const getUserData = () => (dispatch) => {
  dispatch(userStart());
  axios
    .get("http://localhost:8000/api/v1/users/current/", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${localStorage.getItem("token")}`,
      },
    })
    .then((res) => {
      dispatch(userSuccess(res.data));
    })
    .catch((err) => {
      dispatch(userFail(err));
    });
};

import axios from "axios";
import * as actionTypes from "./actionTypes";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSuccess = (token) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: token,
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
  };
};

export const authLogout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("expirationDate");
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};

export const checkAuthTimeout = (expirationTime) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(authLogout());
    }, expirationTime * 1000);
  };
};

const setToken = (token) => {
  const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
  localStorage.setItem("token", token);
  localStorage.setItem("expirationDate", expirationDate);
};

export const authSignIn = (username, password) => (dispatch) => {
  dispatch(authStart());
  axios
    .post("http://127.0.0.1:8000/api/v1/rest-auth/login/", {
      username: username,
      password: password,
    })
    .then((res) => {
      let token = res.data.key;
      setToken(token);
      dispatch(authSuccess(token));
      dispatch(checkAuthTimeout(3600));
    })
    .catch((err) => {
      authFail(err);
    });
};

export const authSignup = (username, email, password1, password2) => (
  dispatch
) => {
  dispatch(authStart());
  axios
    .post("http://127.0.0.1:8000/api/v1/rest-auth/registration/", {
      username: username,
      email: email,
      password1: password1,
      password2: password2,
    })
    .then((res) => {
      let token = res.data.key;
      setToken(token);
      dispatch(authSuccess(token));
      dispatch(checkAuthTimeout(3600));
    })
    .catch((err) => {
      authFail(err);
    });
};
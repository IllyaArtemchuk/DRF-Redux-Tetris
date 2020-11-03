import axios from "axios";
import * as actionTypes from "./actionTypes";
import history from "../../history";

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
  localStorage.removeItem("token");
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
      history.push("/");
    })
    .catch((err) => {
      dispatch(authFail(err));
    });
};

export const authSignup = (username, password1, password2, email) => (
  dispatch
) => {
  dispatch(authStart());
  let params = {
    username,
    password1,
    password2,
  };
  if (email !== "") {
    params.email = email;
  }
  axios
    .post("http://127.0.0.1:8000/api/v1/rest-auth/registration/", params)
    .then((res) => {
      let token = res.data.key;
      setToken(token);
      dispatch(authSuccess(token));
      dispatch(checkAuthTimeout(3600));
    })
    .catch((err) => {
      dispatch(authFail(err));
    });
};

export const authCheckState = () => (dispatch) => {
  const token = localStorage.getItem("token");
  if (token === undefined) {
    dispatch(authLogout());
  } else {
    const expirationDate = new Date(localStorage.getItem("expirationDate"));
    if (expirationDate <= new Date()) {
      dispatch(authLogout());
    } else {
      dispatch(authSuccess(token));
      dispatch(
        checkAuthTimeout(
          (expirationDate.getTime() - new Date().getTime()) / 1000
        )
      );
    }
  }
};

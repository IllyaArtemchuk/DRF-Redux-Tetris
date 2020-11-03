import axios from "axios";
import * as actionTypes from "./actionTypes";

export const leaderboardStart = () => {
  return {
    type: actionTypes.LEADERBOARD_START,
  };
};

export const leaderboardSuccess = (data) => {
  return {
    type: actionTypes.LEADERBOARD_SUCCESS,
    data: data,
  };
};

export const leaderboardFail = (error) => {
  return {
    type: actionTypes.LEADERBOARD_FAIL,
    error: error,
  };
};

export const userDataSuccess = (userData) => {
  return {
    type: actionTypes.USERDATA_SUCCESS,
    user: userData,
  };
};

export const userDataLogout = () => {
  return {
    type: actionTypes.USERDATA_LOGOUT,
    user: null,
  };
};

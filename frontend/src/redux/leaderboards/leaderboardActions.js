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

export const leaderboardPostSucces = () => {
  return {
    type: actionTypes.LEADERBOARD_POST_SUCCESS,
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
    userData: userData,
  };
};

export const userDataLogout = () => {
  return {
    type: actionTypes.USERDATA_LOGOUT,
    user: null,
  };
};

export const submitScore = (score) => (dispatch) => {
  dispatch(leaderboardStart());
  axios
    .post("http://127.0.0.1:8000/api/v1/", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${localStorage.getItem("token")}`,
      },
      // The backend handles assigning the user
      player: 1,
      score: score,
    })
    .then((res) => {
      dispatch(leaderboardPostSuccess());
    })
    .catch((err) => {
      dispatch(leaderboardFail(err.message));
    });
};

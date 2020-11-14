import { update } from "lodash";
import * as actionTypes from "./actionTypes";
import { updateState } from "../utility";

const initialState = {
  data: null,
  userData: null,
  loading: false,
  error: null,
};

const leaderboardStart = (state, action) => {
  return updateState(state, {
    error: null,
    loading: true,
  });
};

const leaderboardSuccess = (state, action) => {
  return updateState(state, {
    error: null,
    loading: false,
    data: action.data,
  });
};

const leaderboardFail = (state, action) => {
  return updateState(state, {
    loading: false,
    error: action.error,
  });
};

const userDataSuccess = (state, action) => {
  return updateState(state, {
    error: null,
    loading: false,
    userData: action.userData,
  });
};

const userDataLogout = (state, action) => {
  return updateState(state, {
    userData: null,
  });
};

const leaderboardPostSuccess = (state, action) => {
  return updateState(state, {
    error: null,
    loading: false,
  });
};

const leaderboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LEADERBOARD_START:
      return leaderboardStart(state, action);
    case actionTypes.LEADERBOARD_FAIL:
      return leaderboardFail(state, action);
    case actionTypes.LEADERBOARD_SUCCESS:
      return leaderboardSuccess(state, action);
    case actionTypes.LEADERBOARD_POST_SUCCESS:
      return leaderboardPostSuccess(state, action);
    case actionTypes.USERDATA_SUCCESS:
      return userDataSuccess(state, action);
    case actionTypes.USERDATA_LOGOUT:
      return userDataLogout(state, action);
    default:
      return state;
  }
};

export default leaderboardReducer;

import { combineReducers } from "redux";
import authReducer from "./authentication/authReducer";
import userReducer from "./user/userReducer";
import gameReducer from "./tetris/game/gameReducer";
import appReducer from "./application/appReducer";
import leaderboardReducer from "./leaderboards/leaderboardReducer";

export default combineReducers({
  auth: authReducer,
  app: appReducer,
  user: userReducer,
  leaderboard: leaderboardReducer,
  game: gameReducer,
});

import { combineReducers } from "redux";
import authReducer from "./authentication/authReducer";
import userReducer from "./user/userReducer";
import gameReducer from "./tetris/game/gameReducer";

export default combineReducers({
  auth: authReducer,
  user: userReducer,
  game: gameReducer,
});

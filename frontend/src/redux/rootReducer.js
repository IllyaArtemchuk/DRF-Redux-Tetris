import { combineReducers } from "redux";
import authReducer from "./authentication/authReducer";
import userReducer from "./user/userReducer";

export default combineReducers({
  auth: authReducer,
  user: userReducer,
});

import { combineReducers } from "redux";
import authReducer from "./authReducers";
import contractReducer from "./contractReducers";
import errorReducer from "./errorReducers";
export default combineReducers({
  auth: authReducer,
  contracts: contractReducer,
  errors: errorReducer
});
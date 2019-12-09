import { combineReducers } from "redux";
import authReducer from "./authReducers";
import propertyReducer from "./propertyReducers";
import errorReducer from "./errorReducers";
export default combineReducers({
  auth: authReducer,
  properties: propertyReducer,
  errors: errorReducer
});
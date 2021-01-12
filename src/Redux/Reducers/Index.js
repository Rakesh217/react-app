import validateUser from "./ValidateUser";
import addUser from "./AddUser";
import { combineReducers } from "redux";

export const Reducer = combineReducers({
  Validation: validateUser,
  AddingUser: addUser,
});

import * as types from "./Types";

export const addUser = (details) => {
  return { type: types.ADD_USER, payload: details };
};

export const validateUser = (details) => {
  return { type: types.ADD_USER, payload: details };
};

import * as types from "../Actions/Types";

let initialState = {
  result: {},
};

const addedSuccess = (state, action) => {
  let newState = { ...state };
  newState = Object.assign({}, state, { result: action.result });
  return newState;
};

const addedError = (state, action) => {
  let newState = { ...state };
  newState = Object.assign({}, state, { result: action.result });
  return newState;
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_USER:
      return { ...state };
    case types.ADD_USER_SUCCESS:
      return addedSuccess(state, action);
    case types.ADD_USER_ERROR:
      return addedError(state, action);
    default:
      return { ...state };
  }
};

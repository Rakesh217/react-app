import * as types from "../Actions/Types";

let initialState = {
  result: {},
};

const validationSuccess = (state, action) => {
  let newState = { ...state };
  newState = Object.assign({}, state, { result: action.result });
  return newState;
};

const validationError = (state, action) => {
  let newState = { ...state };
  newState = Object.assign({}, state, { result: action.result });
  return newState;
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.VALIDATE_USER:
      return { ...state };
    case types.VALIDATE_USER_SUCCESS:
      return validationSuccess(state, action);
    case types.VALIDATE_USER_ERROR:
      return validationError(state, action);
    default:
      return { ...state };
  }
};

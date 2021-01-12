import * as types from "../Actions/Types";
import { takeEvery, put, call } from "redux-saga/effects";
import { fetchAddUser, fetchValidateUser } from "../Service";

function* fetchingAddUser(action) {
  try {
    let api = "http://localhost:5000/addUser";
    let body = action.payload;
    let response = yield call(fetchAddUser, api, body);
    let result = yield response.json();
    if (result.error) {
      yield put({ type: types.ADD_USER_ERROR, result: result.error });
    } else {
      yield put({ type: types.ADD_USER_SUCCESS, result: result });
    }
  } catch (err) {
    console.log("Fetch Add User", err);
  }
}

function* fetchingValidateUser(action) {
  try {
    let api = "http://localhost:5000/validateUser";
    let body = action.payload;
    let response = yield call(fetchValidateUser, api, body);
    let result = yield response.json();
    if (result.error) {
      yield put({ type: types.ADD_USER_ERROR, result: result.error });
    } else {
      yield put({ type: types.ADD_USER_SUCCESS, result: result });
    }
  } catch (err) {
    console.log("Fetch Validate User", err);
  }
}

export default function* rootSaga(params) {
  yield takeEvery(types.ADD_USER, fetchingAddUser);
  yield takeEvery(types.VALIDATE_USER, fetchingValidateUser);
}

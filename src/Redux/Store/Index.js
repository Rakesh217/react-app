import rootSaga from "./Sagas";
import { Reducer } from "../Reducers/Index";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

let sagaMiddleware = createSagaMiddleware();

let middleware = [sagaMiddleware];

export const store = createStore(Reducer, applyMiddleware(...middleware));

sagaMiddleware.run(rootSaga);

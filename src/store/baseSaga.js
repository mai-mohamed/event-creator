import { all } from "redux-saga/effects";
import authSaga from "./Auth/saga";
import eventsSaga from "./Events/saga";

export default function* baseSaga() {
  yield all([authSaga(), eventsSaga()]);
}

import { call, put, takeEvery } from "redux-saga/effects";
import { auth } from "./../../firebase/utils";
import * as types from "./types";
import * as actions from "./actions";
import * as apis from "./api";
import history from "./../../Routes/History";

function* submitLoginSaga() {
  try {
    const response = yield call(apis.submitLogin);

    response &&
      (yield put(actions.getLoginSubmittedDataAction(response?.accessToken)));
    response && localStorage.setItem("userData", response?.accessToken);
    response && localStorage.setItem("name", response?.displayName);
    response && localStorage.setItem("img", response?.photoURL);
    history.push("/events");
  } catch (error) {
    console.log(error);
  }
}

function* logoutSaga({ payload }) {
  try {
    auth.signOut();
    localStorage.removeItem("userData");
    yield put(actions.getLoginSubmittedDataAction(null));
    history.push("/login");
  } catch (error) {
    console.log(error);
  }
}

export default function* authSaga() {
  yield takeEvery(types.SUBMIT_LOGIN_ACTION, submitLoginSaga);
  yield takeEvery(types.LOGOUT_ACTION, logoutSaga);
}

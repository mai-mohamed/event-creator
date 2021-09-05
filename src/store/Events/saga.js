import { call, put, takeEvery } from "redux-saga/effects";
import { setFullScreenLoaderAction } from "../Loaders/actions";
import * as actions from "./actions";
import * as types from "./types";
import * as apis from "./api";

function* submitCreateEventSaga({ payload }) {
  try {
    yield call(apis.submitCreateEvent, payload);
  } catch (error) {
    console.log(error);
  }
}

function* getAllEventsSaga() {
  try {
    const response = yield call(apis.fetchEvents);
    yield put(actions.getAllEventsResponse(response));
    yield put(setFullScreenLoaderAction(false));
  } catch (error) {
    console.log(error);
  }
}

function* getEventDetailsSaga({ payload }) {
  try {
    const response = yield call(apis.fetchEventDetails, payload?.id);
    yield put(actions.getEventDetailsResponse(response));
    yield put(setFullScreenLoaderAction(false));
  } catch (error) {
    console.log(error);
  }
}

function* bookEventSaga({ payload }) {
  try {
    const response = yield call(apis.bookEvent, payload);
  } catch (error) {
    console.log(error);
  }
}

export default function* eventsSaga() {
  yield takeEvery(types.SUBMIT_CREATE_EVENT_ACTION, submitCreateEventSaga);
  yield takeEvery(types.GET_ALL_EVENTS_ACTION, getAllEventsSaga);
  yield takeEvery(types.GET_EVENT_DETAILS_ACTION, getEventDetailsSaga);
  yield takeEvery(types.BOOK_EVENT_ACTION, bookEventSaga);
}

import * as types from "./types";
export const submitCreateEventAction = (payload) => ({
  type: types.SUBMIT_CREATE_EVENT_ACTION,
  payload,
});

export const getAllEventsAction = () => ({
  type: types.GET_ALL_EVENTS_ACTION,
});

export const getAllEventsResponse = (payload) => ({
  type: types.GET_ALL_EVENTS_RESPONSE,
  payload,
});

export const getEventDetailsAction = (payload) => ({
  type: types.GET_EVENT_DETAILS_ACTION,
  payload,
});

export const getEventDetailsResponse = (payload) => ({
  type: types.GET_EVENT_DETAILS_RESPONSE,
  payload,
});

export const bookEventAction = (payload) => ({
  type: types.BOOK_EVENT_ACTION,
  payload,
});

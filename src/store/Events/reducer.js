import * as types from "./types";

const INITIAL_STATE = { allEvents: [], eventDetails: {} };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_ALL_EVENTS_RESPONSE:
      return { ...state, allEvents: action.payload };
    case types.GET_EVENT_DETAILS_RESPONSE:
      return { ...state, eventDetails: action.payload };
    default:
      return state;
  }
};

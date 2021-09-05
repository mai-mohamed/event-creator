import * as types from "./types";

const INITIAL_STATE = {
  auth: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_LOGIN_SUBMITTED_DATA:
      return { ...state, auth: action.payload };

    default:
      return state;
  }
};

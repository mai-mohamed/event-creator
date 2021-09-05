import * as types from "./types";

const INITIAL_STATE = { fullScreenLoader: false };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SET_FULL_SCREEN_LOADER_ACTION:
      return { ...state, fullScreenLoader: action.payload };

    default:
      return state;
  }
};

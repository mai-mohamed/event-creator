import * as types from "./types";

export const submitLoginAction = (payload) => ({
  type: types.SUBMIT_LOGIN_ACTION,
  payload,
});

export const getLoginSubmittedDataAction = (payload) => {
  return {
    type: types.GET_LOGIN_SUBMITTED_DATA,
    payload,
  };
};

export const logoutAction = (payload) => ({
  type: types.LOGOUT_ACTION,
  payload,
});

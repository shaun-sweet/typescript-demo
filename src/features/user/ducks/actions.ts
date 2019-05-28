import { action } from "typesafe-actions";
import { USER_LOGGED_IN, USER_LOGGED_OUT } from "./actionTypes";
import { userInitialState } from "./reducers";

export const setUserLoggedIn = (user: typeof userInitialState) =>
  action(USER_LOGGED_IN, user);
export const setUserLoggedOut = () => action(USER_LOGGED_OUT);

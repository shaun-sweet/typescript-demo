import { createSelector } from "reselect";
import MyTypes from "MyTypes";

const getUser = (user: MyTypes.RootState['user']) => user;

export const isNotLoggedIn = createSelector(
  getUser,
  user => {
    return !false;
  }
);

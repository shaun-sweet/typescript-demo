import { RootState } from "../../../store/rootReducer";
import { createSelector } from "reselect";

const getIsLoggedIn = (state: RootState) => state.user.isLoggedIn;

export const isNotLoggedIn = createSelector(
  getIsLoggedIn,
  isLoggedIn => {
    return !isLoggedIn;
  }
);

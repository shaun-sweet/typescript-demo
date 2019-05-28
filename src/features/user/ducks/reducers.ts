import { ActionType } from "typesafe-actions";
import * as actions from "./actions";
import { USER_LOGGED_IN, USER_LOGGED_OUT } from "./actionTypes";

export const userInitialState = {
  userId: "",
  username: "",
  isAdmin: false,
  permissions: ['']
};

const userReducer = (
  state: typeof userInitialState = userInitialState,
  action: ActionType<typeof actions>
) => {
  switch (action.type) {
    case USER_LOGGED_IN:
      return action.payload;
    case USER_LOGGED_OUT:
      return { ...userInitialState };
    default:
      return state;
  }
};

export default userReducer;

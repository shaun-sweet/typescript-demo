import { combineReducers } from "redux";

import { userReducer } from "../features/user/ducks";

const rootReducer = combineReducers({
  user: userReducer
});

export default rootReducer;

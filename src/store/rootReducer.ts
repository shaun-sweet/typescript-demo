import { combineReducers } from "redux";
import { entitiesReducer } from "../features/common/ducks";

import { userReducer } from "../features/user/ducks";

const rootReducer = combineReducers({
  entities: entitiesReducer,
  user: userReducer
});

export default rootReducer;

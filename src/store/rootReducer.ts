import { combineReducers } from "redux";
import { entitiesReducer } from "../features/common/ducks";

import { StateType } from 'typesafe-actions';
import { userReducer } from "../features/user/ducks";

const rootReducer = combineReducers({
  entities: entitiesReducer,
  user: userReducer
});

export default rootReducer;

export type RootState = StateType<typeof rootReducer>

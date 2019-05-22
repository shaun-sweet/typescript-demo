import { StateType, ActionType } from "typesafe-actions";

declare module "MyTypes" {
  export type Store = StateType<typeof import("./configureStore").default>;
  export type RootAction = ActionType<typeof import("./rootAction").default>;
  export type RootState = StateType<typeof import("./rootReducer").default>;
}

import { action } from "typesafe-actions";
import { USER_LOGGED_IN, USER_LOGGED_OUT } from "./actionTypes";
import { userInitialState } from "./reducers";
import { Dispatch } from "redux";
import axios from "axios";
import mockAdapter from "axios-mock-adapter";
import faker from "faker";

export const setUserLoggedIn = (user: typeof userInitialState) =>
  action(USER_LOGGED_IN, user);
export const setUserLoggedOut = () => action(USER_LOGGED_OUT);

const mock = new mockAdapter(axios, { delayResponse: 2000 });

const mockReply = {
  userId: faker.random.uuid(),
  username: faker.internet.userName(),
  isAdmin: faker.random.boolean(),
  permissions: [faker.internet.color()]
}

mock.onGet("/login").reply(200, mockReply);

export const logUserIn = () => async (dispatch: Dispatch) => {
  return axios.get<typeof mockReply>("/login").then((response) => {
    dispatch(setUserLoggedIn(response.data))
  });
};

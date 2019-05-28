import { userActions } from "./index";
import { Dispatch } from "redux";
import axios from "axios";
import mockAdapter from "axios-mock-adapter";
import faker from "faker";

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
    dispatch(userActions.setUserLoggedIn(response.data))
  });
};

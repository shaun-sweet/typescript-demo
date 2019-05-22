import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from 'redux-devtools-extension';

const middlewares = [ thunk];
const middlewareEnhancers = applyMiddleware(...middlewares);

const enhancers = [middlewareEnhancers];

const store = createStore(rootReducer, composeWithDevTools(...enhancers));

export default store;

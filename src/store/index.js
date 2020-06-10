import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";

import reducer from "../reducers";
import { analytics } from "../middleware";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk, analytics))
);

export default store;

import { combineReducers } from "redux";

const path = (state = "", action) => {
  if (action.type === "ROUTER_NAVIGATE") {
    return action.path;
  }

  return state;
};

export default combineReducers({
  path,
});

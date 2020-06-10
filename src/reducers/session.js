import { combineReducers } from "redux";

const loading = (state = false, action) => {
  if (action.type === "REQUEST_ACCESS_TOKEN") {
    return true;
  }

  if (action.type === "RECEIVE_ACCESS_TOKEN") {
    return false;
  }

  return state;
};

const token = (state = null, action) => {
  if (action.type === "RECEIVE_ACCESS_TOKEN") {
    return action.token;
  }

  return state;
};

export default combineReducers({
  loading,
  token,
});

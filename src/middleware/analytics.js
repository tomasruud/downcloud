import ReactGA from "react-ga";
import { tracks } from "../selectors";

const analytics = (store) => (next) => (action) => {
  const newState = next(action);

  if (action.type === "ROUTER_NAVIGATE") {
    ReactGA.pageview(action.path);
  }

  if (action.type === "REQUEST_ACCESS_TOKEN") {
    ReactGA.event({
      category: "Session",
      action: "Started login process",
    });
  }

  if (action.type === "RECEIVE_ACCESS_TOKEN") {
    ReactGA.event({
      category: "Session",
      action: "Finished login process",
    });
  }

  if (action.type === "REQUEST_TRACKS") {
    ReactGA.event({
      category: "Tracks",
      action: "Requested track data",
      nonInteraction: true,
    });
  }

  if (action.type === "RECEIVE_TRACKS") {
    ReactGA.event({
      category: "Tracks",
      action: "Received track data",
      label: "Track count",
      value: tracks.all(store.getState()).length,
      nonInteraction: true,
    });
  }

  return newState;
};

export default analytics;

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import ReactGA from "react-ga";

import App from "./App";
import store from "./store";

ReactGA.initialize(process.env.REACT_APP_GA_ID, {
  debug: process.env.NODE_ENV === "development",
});

ReactGA.pageview("/");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("downcloud")
);

if (module.hot) {
  module.hot.accept();
}

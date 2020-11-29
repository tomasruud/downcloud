import React from "react";
import ReactDOM from "react-dom";

import { Provider as StoreProvider } from "./Store";
import "./index.dist.css";

const render = () => {
  const App = require("./App").default;

  ReactDOM.render(
    <React.StrictMode>
      <StoreProvider>
        <App />
      </StoreProvider>
    </React.StrictMode>,
    document.getElementById("downcloud")
  );
};

render();

if (process.env.NODE_ENV === "development") {
  if (module.hot) {
    module.hot.accept("./App", render);
  }
}

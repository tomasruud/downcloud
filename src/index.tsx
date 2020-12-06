import React from "react";
import ReactDOM from "react-dom";

import "./index.dist.css";

const render = () => {
    const App = require("./App").default;

    ReactDOM.render(
        <React.StrictMode>
            <App/>
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

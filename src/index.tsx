import React, {useEffect} from "react";
import ReactDOM from "react-dom";

import {Provider as StoreProvider} from "./Store";
import "./index.dist.css";
import {authenticate} from "./api/soundcloud";

const render = () => {
    // const App = require("./App").default;

    const App = () => {
        useEffect(() => {
            authenticate().then(console.log)
        })
        return null;
    };

    ReactDOM.render(
        <React.StrictMode>
            <StoreProvider>
                <App/>
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

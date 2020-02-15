import React from "react";
import ReactDOM from "react-dom";
import "regenerator-runtime/runtime";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <App />,
  document.getElementById("root"),
);

serviceWorker.register();

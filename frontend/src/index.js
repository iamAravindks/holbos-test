import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";

import App from "./App";
import { Provider } from "./context/Context";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

import { createRoot } from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

import "./index.css";

import App from "./App";
import { Provider } from "./context/Context";

const root = createRoot(document.getElementById("root"));

root.render(
  <Provider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

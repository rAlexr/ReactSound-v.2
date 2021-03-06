import React from "react";
import ReactDOM from "react-dom/client";

import App from "./containers/app/App";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./index.globalstyle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

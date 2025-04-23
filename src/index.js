import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "remixicon/fonts/remixicon.css";
import "./index.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Add this line
import "bootstrap/dist/css/bootstrap.min.css"; // Also include CSS if not already added
import store from "./store/store";
import { Provider } from "react-redux";

import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

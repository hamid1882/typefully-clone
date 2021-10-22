import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import DarkState from "./context/DarkState";

ReactDOM.render(
  <React.StrictMode>
      <DarkState>
        <App />
      </DarkState>
  </React.StrictMode>,
  document.getElementById("root")
);

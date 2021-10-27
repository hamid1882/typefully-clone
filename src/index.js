import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import DarkState from "./Context/DarkState";
import "./index.css";

ReactDOM.render(
	<React.StrictMode>
		<DarkState>
			<App />
		</DarkState>
	</React.StrictMode>,
	document.getElementById("root")
);

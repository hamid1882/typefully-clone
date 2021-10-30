import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import App from "./App";
import { store } from "./App/store";
import DarkState from "./Context/DarkState";

import "./index.css";

ReactDOM.render(
	<Provider store={store}>
		<DarkState>
			<App />
		</DarkState>
	</Provider>,
	document.getElementById("root")
);

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Queue from "./Components/Queue";
import "./App.scss";

function App() {
  return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/user">
            <Queue />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;

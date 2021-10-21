import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import DarkContext from "./context/DarkContext";
import Queue from "./Components/Queue";

function App() {
  const mode = useContext(DarkContext);


  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <div style={mode.style}>
              <Home />
            </div>
          </Route>
          <Route path="/user">
            <div style={mode.style}>
              <Queue />
            </div>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;

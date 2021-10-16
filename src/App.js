import React, { useContext } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import DarkContext from "./context/DarkContext";

function App() {
  const mode = useContext(DarkContext);

  return (
    <div style={mode.style}>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;

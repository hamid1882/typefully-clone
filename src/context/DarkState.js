import { useState } from "react";
import DarkContext from "./DarkContext";

const DarkState = (props) => {
  const [style, setStyle] = useState({
    backgroundColor: "white",
    color: "black"
  });

  const [collapse, setCollapse] = useState("d-block");

  const [draftCollapse, setdraftCollapse] = useState("d-block");

  const [btnText, setBtnText] = useState("Light Mode");


  const handleStyle = () => {
    if (style.color === "black") {
      setStyle({
        backgroundColor: "#172e3d",
        color: "white",
      });
      setBtnText("Night Mode");
    } else {
      setStyle({
        backgroundColor: "white",
        color: "black",
      });
      setBtnText("Light Mode");
    }
  };

  const handleCollapse = () => {
    if (collapse === "d-block") {
      setCollapse("d-none");
      handleDraftCollapse();
    } else {
      setCollapse("d-block");
      handleDraftCollapse();
    }
  };

  const handleDraftCollapse = () => {
    if (draftCollapse === "d-block") {
      setdraftCollapse("d-none");
    } else {
      setdraftCollapse("d-block");
    }
  };

  

  

  return (
    <DarkContext.Provider
      value={{ style, handleStyle, btnText, handleCollapse, collapse, draftCollapse, handleDraftCollapse }}
    >
      {props.children}
    </DarkContext.Provider>
  );
};

export default DarkState;

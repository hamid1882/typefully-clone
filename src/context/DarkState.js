import { useState } from "react";
import DarkContext from "./DarkContext";

const DarkState = (props) => {
  const [style, setStyle] = useState({
    backgroundColor: "white",
    color: "#738696",
    borderColor: "#ecf0f4",
  });

  const [btnText, setBtnText] = useState("Light Mode");

  const handleStyle = () => {
    if (style.backgroundColor === "white") {
      setStyle({
        backgroundColor: "#16212c",
        color: "#738696",
        transition: "all 500ms",
        borderColor: "#2b343b",
      });
      setBtnText("Night Mode");
    } else {
      setStyle({
        backgroundColor: "white",
        color: "#738696",
        transition: "all 500ms",
        borderColor: "#ecf0f4",
      });
      setBtnText("Light Mode");
    }
  };

  // Dark Style
  const [styleDark, setStyleDark] = useState({
    backgroundColor: "#e7ebef",
    color: "black",
    transition: "all 500ms",
    borderColor: "#ecf0f4",
  });

  const handleDarkStyle = () => {
    if (styleDark.color === "black") {
      setStyleDark({
        backgroundColor: "#2c333a",
        color: "white",
        transition: "all 500ms",
        borderColor: "#2b343b",
      });
    } else {
      setStyleDark({
        backgroundColor: "#e7ebef",
        color: "black",
        transition: "all 500ms",
        borderColor: "#ecf0f4",
      });
    }
  };

  // Collapse !
  const [collapse, setCollapse] = useState("d-block");

  const handleCollapse = () => {
    if (collapse === "d-block") {
      setCollapse("d-none");
      handleDraftCollapse();
    } else {
      setCollapse("d-block");
      handleDraftCollapse();
    }
  };

  // Draft collapse!
  const [draftCollapse, setdraftCollapse] = useState({
    display: "block",
    transition: "all 700ms",
    borderColor: "#ecf0f4",
    transform: "translate(0px)",
  });

  const handleDraftCollapse = () => {
    if (draftCollapse.transform === "translate(-280px)") {
      setdraftCollapse({
        transform: "translate(0)",
        transition: "all 700ms",
      });
    } else {
      setdraftCollapse({
        transition: "all 2000ms",
        transform: "translate(-280px)",
      });
    }
  };

  return (
    <DarkContext.Provider
      value={{
        style,
        handleStyle,
        btnText,
        handleCollapse,
        collapse,
        draftCollapse,
        handleDraftCollapse,
        styleDark,
        handleDarkStyle,
      }}
    >
      {props.children}
    </DarkContext.Provider>
  );
};

export default DarkState;

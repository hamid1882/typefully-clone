import { useState } from "react";
import { darkContext as DarkContext } from ".";


const DarkState = (props) => {


  // Collapse !
  const [collapse, setCollapse] = useState("d-block");

  const handleCollapse = () => {
    if (collapse === "d-block") {
      setCollapse("d-none");
      check && handleDraftCollapse();
    } else {
      setCollapse("d-block");
      check && handleDraftCollapse();
    }
  };

  // Draft collapse!
  const [draftCollapse, setdraftCollapse] = useState({
    transition: "all 700ms",
    borderColor: "#ecf0f4",
    transform: "translate(0px)",
  });

  const check = draftCollapse.transform === "translate(-250px)";

  const handleDraftCollapse = () => {
    if (draftCollapse.transform === "translate(-250px)") {
      setdraftCollapse({
        transform: "translate(0px)",
        transition: "all 700ms",
      });
    } else {
      setdraftCollapse({
        transition: "all 1000ms",
        transform: "translate(-250px)",
      });
    }
  };

  return (
    <DarkContext.Provider
      value={{
        check,
        handleCollapse,
        collapse,
        draftCollapse,
        handleDraftCollapse,
      }}
    >
      {props.children}
    </DarkContext.Provider>
  );
};

export default DarkState;

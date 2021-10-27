import { useState, useReducer } from "react";
import { darkContext as DarkContext } from ".";

const initialState = {
  style: {
    backgroundColor: "white",
    color: "#738696",
    borderColor: "#ecf0f4",
    transition: "all 500ms",
  },
  darkStyle: {
    backgroundColor: "#e7ebef",
    color: "black",
    transition: "all 500ms",
    borderColor: "#ecf0f4",
  },
};

const ACTIONS = {
  STYLE: "style_update",
  DEFAULTSTYLE: "defaultStyle_update",
  DARKSTYLE: "darkStyle_update",
  DEFAULTDARKSTYLE: "defaultdark_update",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.STYLE:
      return {
        ...state,
        style: {
          backgroundColor: "#16212c",
          color: "#738696",
          transition: "all 500ms",
          borderColor: "#2b343b",
        },
      };
    case ACTIONS.DEFAULTSTYLE:
      return {
        ...state,
        style: {
          backgroundColor: "white",
          color: "#738696",
          borderColor: "#ecf0f4",
          transition: "all 500ms",
        },
      };
    case ACTIONS.DARKSTYLE:
      return {
        ...state,
        darkStyle: {
          backgroundColor: "#2c333a",
          color: "white",
          transition: "all 500ms",
          borderColor: "#2b343b",
        },
      };
    case ACTIONS.DEFAULTDARKSTYLE:
      return {
        ...state,
        darkStyle: { 
          backgroundColor: "#e7ebef",
        color: "black",
        transition: "all 500ms",
        borderColor: "#ecf0f4",
      }};
    default:
      return state;
  }
}

const DarkState = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleStyle = () => {
    if (state.style.backgroundColor === "white") {
      dispatch({ type: ACTIONS.STYLE });
    } else {
      dispatch({ type: ACTIONS.DEFAULTSTYLE });
    }
  };

  // Dark Style

  const handleDarkStyle = () => {
    if (state.darkStyle.color === "black") {
      dispatch({ type: ACTIONS.DARKSTYLE });
    } else {
      dispatch({ type: ACTIONS.DEFAULTDARKSTYLE });
    }
  };

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
        state,
        check,
        style: state.style,
        handleStyle,
        handleCollapse,
        collapse,
        draftCollapse,
        handleDraftCollapse,
        styleDark: state.darkStyle,
        handleDarkStyle,
      }}
    >
      {props.children}
    </DarkContext.Provider>
  );
};

export default DarkState;

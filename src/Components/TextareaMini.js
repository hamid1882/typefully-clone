import React, { useContext } from "react";
import Floatingicons from "./Floatingicons";
import DarkContext from "../context/DarkContext";

const TextareaMini = (props) => {
  const context = useContext(DarkContext);
  return (
    <div>
      <div
        className="container px-0"
        style={context.collapse === "d-block"
            ? { height: "calc(100vh - 10rem)" }
            : { height: "calc(100vh - 6rem)" }
        }
      >
        <textarea
          style={context.style}
          value={props.input}
          onChange={props.handleChange}
        className={`textarea-style form-control outline-0 ${context.style.color === 'white' ? 'shadow-none' : 'shadow'} border-0 w-100 h-100 p-5`}
          placeholder="Write here."
          id="floatingTextarea"
        ></textarea>
      </div>
      <div className="d-md-none d-flex justify-content-center">
        <Floatingicons input={props.input} />
      </div>
    </div>
  );
};

export default TextareaMini;

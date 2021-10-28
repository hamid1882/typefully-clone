import React, { useContext } from "react";
import Floatingicons from "./Floatingicons";
import { darkContext, mainContext } from "../Context";
import {
  changeInput
} from '../action'
import { inputSelector } from "../selectors";

const TextareaMini = () => {
  const context = useContext(darkContext);
  const { dispatch, state } = useContext(mainContext);
  const input = inputSelector(state)

  return (
    <div>
      <div
        className="container px-0"
        style={context.collapse === "d-block"
            ? { height: "calc(100vh - 9.5rem)" }
            : { height: "calc(100vh - 6rem)" }
        }
      >
        <textarea
          style={context.styleDark}
          value={input}
          onChange={e => {
            e.preventDefault();
            dispatch(changeInput(e.target.value))
          }}
        className={`textarea-style bg-transparent form-control outline-0 ${context.style.color === 'white' ? 'shadow-none' : 'shadow'} border-0 w-100 h-100 p-5`}
          placeholder="Write here."
          id="floatingTextarea"
        ></textarea>
      </div>
      <div className="d-md-none d-flex justify-content-center">
        <Floatingicons />
      </div>
    </div>
  );
};

export default TextareaMini;

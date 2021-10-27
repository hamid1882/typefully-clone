import { useRef, useEffect, useContext } from "react";
import { darkContext, mainContext } from "../Context";
import Floatingicons from "./Floatingicons";
import {
  changeInput
} from '../action'

const Textarea = () => {
  const { textCount, input, dispatch, state} = useContext(mainContext);
  const {style, styleDark, collapse} = useContext(darkContext);
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div
      style={
        (style,
          collapse === "d-block"
            ? { height: "calc(100vh - 3rem)" }
            : { height: "calc(100vh - 0.1rem)" })
      }
      className={`font-style container-fluid ${state.scrollBar === true ? 'scroll' : 'border-end'} px-0 m-0 `}
    >
      <div
        style={{ height: "calc(100% - 11.5%)" }}
        className="container-fluid p-0"
      >
        <div className="container h-100">
          <textarea
            ref={inputRef}
            value={input}
            onChange={e => {
              e.preventDefault();
              dispatch({ type:"input_change", payload: e.target.value})
              dispatch(changeInput(e.target.value))
            }}
            style={styleDark}
            className={`textarea-style form-control outline-0 shadow-none border-0 w-100 h-100 p-5 bg-transparent ${textCount === 1 ? 'textDirectionLeft' : "textDirectionRight"}`}
            placeholder="Write here."
            id="floatingTextarea"
          ></textarea>
        </div>
      </div>
      <div style={{ width: "100%" }} className="d-flex justify-content-end">
        <Floatingicons />
      </div>
    </div>
  );
};

export default Textarea;

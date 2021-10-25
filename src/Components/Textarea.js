import { useRef, useEffect, useContext } from "react";
import { darkContext, mainContext } from "../Context";
import Floatingicons from "./Floatingicons";
import {
  changeInput
} from '../action'

const Textarea = () => {
  const { scrollbar, textCount, input, handleAddTweet, dispatch} = useContext(mainContext);
  const mode = useContext(darkContext);
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div
      style={
        (mode.style,
          mode.collapse === "d-block"
            ? { height: "calc(100vh - 3rem)" }
            : { height: "calc(100vh - 0.1rem)" })
      }
      className={`font-style container-fluid scroll px-0 m-0 ${scrollbar === true ? '' : 'tweet-overflow border-end'}`}
    >
      <div
        style={{ height: "calc(100% - 11.5%)" }}
        className="container-fluid p-0"
      >
        <div className="container h-100">
          <textarea
            ref={inputRef}
            value={input}
            onKeyDown={e => {
              console.log(e.shiftKey)
              if (e.shiftKey) {
                dispatch({ type: "reset" });
              }
            }}
            onChange={e => {
              e.preventDefault();
              dispatch({ type:"input_change", payload: e.target.value})
              dispatch(changeInput(e.target.value))
            }}
            style={mode.styleDark}
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

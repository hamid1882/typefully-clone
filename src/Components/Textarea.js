import { useRef, useEffect, useContext } from "react";
import Floatingicons from "./Floatingicons";
import DarkContext from "../context/DarkContext";
import MainContext from "../context/MainContext";
import "../App.css";

import "../App.css";

const Textarea = (props) => {
  const mode = useContext(DarkContext);
  const main = useContext(MainContext);
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
      className={`font-style container-fluid scroll px-0 m-0 ${main.scrollbar === true ? '' : 'tweet-overflow border-end'}`}
    >
      <div
        style={{ height: "calc(100% - 11.5%)" }}
        className="container-fluid p-0"
      >
        <div className="container h-100">
          <textarea
            ref={inputRef}
            value={props.input}
            onChange={props.handleChange}
            style={mode.styleDark}
            className={`textarea-style form-control outline-0 shadow-none border-0 w-100 h-100 p-5 bg-transparent ${main.textCount === 1 ? 'textDirectionLeft' : "textDirectionRight"}`}
            placeholder="Write here."
            id="floatingTextarea"
          ></textarea>
        </div>
      </div>
      <div style={{ width: "100%" }} className="d-flex justify-content-end">
        <Floatingicons
          input={props.input}
          handleAddTweet={props.handleAddTweet}
        />
      </div>
    </div>
  );
};

export default Textarea;

import { useRef, useEffect, useContext } from "react";
import Floatingicons from "./Floatingicons";
import DarkContext from "../context/DarkContext";
import "../App.css";

const Textarea = (props) => {
  const mode = useContext(DarkContext);
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
      <div
        style={mode.style}
        className="font-style container-fluid scroll p-0 m-0"
      >
        <div className="container-fluid">
          <div
            className="container"
            style={
              mode.collapse === "d-block"
                ? { height: "calc(100vh - 8rem)" }
                : { height: "calc(100vh - 6rem)" }
            }
          >
            <textarea
              ref={inputRef}
              value={props.input}
              onChange={props.handleChange}
              style={mode.style}
              className="textarea-style form-control outline-0 shadow-none border-0 w-100 h-100 p-5"
              placeholder="Write here."
              id="floatingTextarea"
            ></textarea>
          </div>
        </div>
        <div className="d-flex justify-content-center my-xl-2">
          <Floatingicons input={props.input} handleAddTweet={props.handleAddTweet} handleAddDraft={props.handleAddDraft}/>
        </div>
      </div>
  );
};

export default Textarea;

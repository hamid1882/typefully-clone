import { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectStyle,
  selectInput,
  inputChange,
  selectTextDirection,
  collapseDraft,
  selectNavCollapsed,
} from "../Features/InputSlice";
import Floatingicons from "./Floatingicons";
import { DarkMode, lightMode } from "../Features/Styles";

const TextareaMini = () => {
  const newStyle = useSelector(selectStyle);
  const darkStyle =
    newStyle === true ? DarkMode.styleDark : lightMode.styleDark;

  const renderValue = useSelector(selectInput);

  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };
  useEffect(focusInput, []);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(
      inputChange({
        item: e.target.value,
      })
    );
  };

  const handleCollapse = () => {
    dispatch(
      collapseDraft({
        transition: "all 700ms",
        borderColor: "#ecf0f4",
        transform: "translate(0px)",
      })
    );
  };

  const collapse = useSelector(selectNavCollapsed);
  const text = useSelector(selectTextDirection);

  return (
    <div className="vh-100">
      <div
        className="container px-0"
        style={
          collapse === true
            ? { height: "calc(100% - 9.7rem)" }
            : { height: "calc(100% - 12rem)" }
        }
      >
        <textarea
          ref={inputRef}
          onClick={handleCollapse}
          style={darkStyle}
          value={renderValue}
          onChange={handleChange}
          className={`textarea-style bg-transparent form-control outline-0 overflow-scroll tweet-overflow ${
            darkStyle.color === "white" ? "shadow-none" : "shadow"
          }
          ${text ? "textDirectionLeft" : "textDirectionRight"}
          border-0 w-100 h-100 p-5
          
          `}
          placeholder="Write here."
          id="floatingTextarea"
        ></textarea>
      </div>
      <div className="d-md-none d-flex justify-content-center py-3 my-3">
        <Floatingicons />
      </div>
    </div>
  );
};

export default TextareaMini;

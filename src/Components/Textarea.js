import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  inputChange,
  selectInput,
  selectStyle,
  selectScrollBar,
  selectTextDirection,
  selectNavCollapsed,
  selectCurrentDraft,
  instantFocus,
} from "../Features/InputSlice";
import Floatingicons from "./Floatingicons";
import useFocus from "./UseFocus";
import { DarkMode, lightMode } from "../Features/Styles";

const Textarea = () => {
  const dispatch = useDispatch();
  const [inputRef, setInputFocus] = useFocus();

  
  useEffect(() => {
    dispatch(instantFocus({
      newRef: inputRef,
      focusRef: setInputFocus
    }))
  }, [])

  const selectedDraft = useSelector(selectCurrentDraft);

  // eslint-disable-next-line
  useEffect(setInputFocus, []);
  // eslint-disable-next-line
  useEffect(setInputFocus, [selectedDraft]);

  const newStyle = useSelector(selectStyle);

  const style = newStyle === true ? DarkMode.styleLight : lightMode.styleLight;
  const darkStyle =
    newStyle === true ? DarkMode.styleDark : lightMode.styleDark;

  const handleChange = (e) => {
    e.preventDefault();
    dispatch(
      inputChange({
        item: e.target.value,
      })
    );
  };


  const input = useSelector(selectInput);
  const collapse = useSelector(selectNavCollapsed);
  const scroll = useSelector(selectScrollBar);
  const text = useSelector(selectTextDirection);

  return (
    <div
      style={
        (style,
        collapse === false
          ? { height: "calc(100vh - 2.5rem)" }
          : { height: "100vh" })
      }
      className={`font-style container-fluid ${
        scroll ? "border-end overflow-scrolls tweet-auto-overflow" : "scroll"
      }`}
    >
      <div
        style={{ height: "calc(100% - 11.5%)" }}
        className="container-fluid p-0"
      >
        <div className="container h-100">
          <textarea
            ref={inputRef}
            value={input}
            onChange={handleChange}
            style={darkStyle}
            className={`textarea-style form-control overflow-scroll tweet-overflow outline-0 shadow-none border-0 w-100 h-100 p-5 bg-transparent ${
              text ? "textDirectionLeft" : "textDirectionRight"
            }`}
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

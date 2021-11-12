import { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  inputChange,
  selectInputChange,
  selectStyle,
  selectDraftView,
  selectScrollBar,
  selectTextDirection,
  selectDraftList,
  saveDraft,
} from "../Features/InputSlice";
import Floatingicons from "./Floatingicons";

const Textarea = () => {
  const inputRef = useRef();
  const dispatch = useDispatch();

  const newStyle = useSelector(selectStyle);
  const style = newStyle.styleLight;
  const darkStyle = newStyle.styleDark;

  useEffect(() => {
    inputRef.current.focus();
  }, []);


  const handleChange = (e) => {
    e.preventDefault();
    dispatch(
      saveDraft({
        item: e.target.value,
      })
    );
  };
  const draft = useSelector(selectDraftList)
  const renderValue = useSelector(selectDraftList);
  const collapse = useSelector(selectDraftView);
  const scroll = useSelector(selectScrollBar);
  const text = useSelector(selectTextDirection);

  console.log(draft)

  return (
    <div
      style={
        (style,
        collapse === "d-block"
          ? { height: "calc(100vh - 2.5rem)" }
          : { height: "100vh" })
      }
      className={`font-style container-fluid ${
        scroll ? "border-end overflow-scrolls tweet-auto-overflow" : "scroll"
      }`}
    >
      <div
        style={{ height: "calc(100% - 11.5%)" }}
        className="container-fluid p-0 "
      >
        <div className="container h-100">
          <textarea
            ref={inputRef}
            value={draft[draft.length-1]}
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

import { useDispatch, useSelector } from "react-redux";
import {
  selectStyle,
  selectInput,
  inputChange,
  selectDraftView,
  selectTextDirection,
  collapseDraft,
} from "../Features/InputSlice";
import Floatingicons from "./Floatingicons";

const TextareaMini = () => {
  const newStyle = useSelector(selectStyle);
  const style = newStyle.styleLight;
  const darkStyle = newStyle.styleDark;

  const renderValue = useSelector(selectInput);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(
      inputChange({
        id: 0,
        item: e.target.value
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

  const collapse = useSelector(selectDraftView);
  const text = useSelector(selectTextDirection);

  return (
    <div>
      <div
        className="container px-0"
        style={
          collapse === "d-block"
            ? { height: "calc(100vh - 10rem)" }
            : { height: "calc(100vh - 7.5rem)" }
        }
      >
        <textarea
        onClick={handleCollapse}
          style={darkStyle}
          value={renderValue}
          onChange={handleChange}
          className={`textarea-style bg-transparent form-control outline-0 overflow-scroll tweet-overflow ${
            style.color === "white" ? "shadow-none" : "shadow"
          }
          ${text ? "textDirectionLeft" : "textDirectionRight"}
          border-0 w-100 h-100 p-5
          
          `}
          placeholder="Write here."
          id="floatingTextarea"
        ></textarea>
      </div>
      <div className="d-md-none d-flex justify-content-center py-3">
        <Floatingicons />
      </div>
    </div>
  );
};

export default TextareaMini;

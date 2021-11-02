import { useRef, useEffect, useContext } from "react";
import { darkContext, mainContext } from "../Context";
import {useDispatch, useSelector} from 'react-redux';
import {inputChange, selectInputChange} from '../Features/TodoSlice';
import Floatingicons from "./Floatingicons";


const Textarea = () => {
  const { textCount, state} = useContext(mainContext);
  const {style, styleDark, collapse} = useContext(darkContext);
  const inputRef = useRef();
  const dispatch = useDispatch();

  const data = useSelector(selectInputChange);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    dispatch(inputChange({
      item: e.target.value,
    }))
  }
  const renderValue = data[data.length - 1].item;

  return (
    <div
      style={
        (style,
          collapse === "d-block"
            ? { height: "calc(100vh - 2.5rem)" }
            : { height: "100vh" })
      }
      className={`font-style container-fluid ${state.scrollBar === true ? 'scroll' : 'border-end border-secondary'} px-0 m-0`}
    >
      <div
        style={{ height: "calc(100% - 11.5%)" }}
        className="container-fluid p-0"
      >
        <div className="container h-100">
          <textarea
            ref={inputRef}
            value={renderValue}
            onChange={handleChange}
            style={styleDark}
            className={`textarea-style overflow-scroll tweet-overflow form-control outline-0 shadow-none border-0 w-100 h-100 p-5 bg-transparent ${textCount === 1 ? 'textDirectionLeft' : "textDirectionRight"}`}
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

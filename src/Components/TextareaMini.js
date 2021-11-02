import React, { useContext } from "react";
import {useDispatch,useSelector} from 'react-redux';
import {selectStyle, selectInputChange, inputChange} from '../Features/TodoSlice';
import Floatingicons from "./Floatingicons";
import { darkContext } from "../Context";

const TextareaMini = () => {
  const context = useContext(darkContext);

  const newStyle = useSelector(selectStyle);
  const style = newStyle[newStyle.length - 1].styleLight;
  const darkStyle = newStyle[newStyle.length - 1].styleDark;

  const data = useSelector(selectInputChange)

  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(inputChange({
      item: e.target.value
    }))
  }

  const renderValue = data[data.length - 1].item;

  return (
    <div>
      <div
        className="container px-0"
        style={context.collapse === "d-block"
            ? { height: "calc(100vh - 10rem)" }
            : { height: "calc(100vh - 7.5rem)" }
        }
      >
        <textarea
          style={darkStyle}
          value={renderValue}
          onChange={handleChange}
        className={`textarea-style bg-transparent form-control outline-0 ${style.color === 'white' ? 'shadow-none' : 'shadow'} border-0 w-100 h-100 p-5`}
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

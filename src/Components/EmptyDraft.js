import { useState, useContext } from "react";
import DarkContext from "../context/DarkContext";

const EmptyDraft = (props) => {
  const [isShown, setIsShown] = useState(false);
  const mode = useContext(DarkContext);

  return (
    <div style={mode.style} className="d-flex border-bottom ">
      <div
        className=""
        style={{
          width: "7px",
          backgroundColor: "blue",
          height: "100%",
          paddingBottom: "57px",
        }}
      ></div>
      <div
        className="d-flex w-100"
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        <fieldset disabled style={{ width: "100%" }}>
          <input
            // eslint-disable-next-line
            style={({ cursor: "pointer" }, mode.style)}
            value={props.input}
            type="text"
            className="w-100 p-2 py-3 border-0 text-truncate"
            placeholder="Empty draft..."
          />
        </fieldset>
        <button className="btn shadow-none" style={mode.style}>
          {isShown && <i class="fas fa-times-circle"></i>}
        </button>
      </div>
    </div>
  );
};

export default EmptyDraft;

import { useState, useContext } from "react";
import DarkContext from "../context/DarkContext";

const EmptyDraft = (props) => {
  const [isShown, setIsShown] = useState(false);
  const mode = useContext(DarkContext);

  return (
    <div style={mode.style} className="d-flex">
      <div
        className=""
        style={{
          width: "7px",
          backgroundColor: "#1da1f2",
          paddingBottom: "57px",
        }}
      ></div>
      <div
        style={mode.style}
        className="d-flex w-100 navBorder"
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        <fieldset disabled>
          <input
            // eslint-disable-next-line
            style={({ cursor: "pointer" }, mode.styleDark)}
            value={props.input}
            type="text"
            className="w-100 p-2 py-3 border-0 text-truncate bg-transparent"
            placeholder="Empty draft..."
          />
        </fieldset>
        <button className="btn shadow-none border-0" style={mode.style}>
          {isShown && <i class="fas fa-times-circle"></i>}
        </button>
      </div>
    </div>
  );
};

export default EmptyDraft;

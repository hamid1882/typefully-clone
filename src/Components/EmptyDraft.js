import { useState, useContext } from "react";
import DarkContext from "../Context/DarkContext";
import MainContext from "../Context/MainContext";

const EmptyDraft = (props) => {
  const [isShown, setIsShown] = useState(false);
  const mode = useContext(DarkContext);
  const main = useContext(MainContext);

  return (
    <div style={mode.style}>
      {props.input.split("\n\n\n").map((data) => {
        return (
          <div className="d-flex w-100">
            {mode.styleDark.color === "black" ? (
              <div
                className=""
                style={{
                  width: "4px",
                  backgroundColor: "#1da1f2",
                  paddingBottom: "57px",
                  boxSizing: "border-box",
                }}
              ></div>
            ) : (
              <div
                style={{
                  width: "4px",
                  backgroundColor: "#802fff",
                  paddingBottom: "57px",
                  boxSizing: "border-box",
                }}
              ></div>
            )}
            <div
              style={mode.style}
              className="d-flex w-100 navBorder justify-content-between"
              onMouseEnter={() => setIsShown(true)}
              onMouseLeave={() => setIsShown(false)}
            >
              <fieldset className="w-100" disabled>
                <input
                  // eslint-disable-next-line
                  style={({ cursor: "pointer" }, mode.styleDark)}
                  value={data}
                  type="text"
                  className={`w-100 p-2 py-3 border-0 text-truncate bg-transparent ${
                    main.textCount === 1
                      ? "textDirectionLeft"
                      : "textDirectionRight"
                  }`}
                  placeholder="Empty draft..."
                />
              </fieldset>
              {isShown && (
                <button className="btn shadow-none border-0" style={mode.style}>
                  <i class="fas fa-times-circle"></i>
                </button>
              )}
            </div>
          </div>
        );
      })}
      {/* <button onClick={props.handleEmptyDraft} className="btn btn-default">Empty draft</button> */}
    </div>
  );
};

export default EmptyDraft;

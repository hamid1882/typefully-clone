import { useState, useContext } from "react";
import { darkContext, mainContext } from "../Context";

const EmptyDraft = () => {
  const [isShown, setIsShown] = useState(false);
  const {style, styleDark, state} = useContext(darkContext);
  const {input,textCount, handleDeleteDraft, deleteDraft} = useContext(mainContext);

  let data = [input]

  return (
    <>
      {deleteDraft && (
        <div style={style}>
          {data.map((data) => {
            return (
              <div className="d-flex w-100">
                {styleDark.color === "black" ? (
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
                  style={style}
                  className="d-flex w-100 navBorder justify-content-between"
                  onMouseEnter={() => setIsShown(true)}
                  onMouseLeave={() => setIsShown(false)}
                >
                  <fieldset className="w-100" disabled>
                    <input
                      // eslint-disable-next-line
                      style={({ cursor: "pointer" }, styleDark)}
                      value={data}
                      type="text"
                      className={`w-100 p-2 py-3 border-0 text-truncate bg-transparent ${
                        textCount === 1
                          ? "textDirectionLeft"
                          : "textDirectionRight"
                      }`}
                      placeholder="Empty draft..."
                    />
                  </fieldset>
                  {isShown && (
                    <button
                      className={`btn shadow-none border-0 `}
                      onClick={handleDeleteDraft}
                      style={style}
                    >
                      <i className={`fas fa-times-circle ${state.darkStyle.color === 'black' ? 'draftBtnHoverLight' : "draftBtnHover"} `}></i>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
          {/* <button onClick={handleEmptyDraft} className="btn btn-default">Empty draft</button> */}
        </div>
      )}
    </>
  );
};

export default EmptyDraft;

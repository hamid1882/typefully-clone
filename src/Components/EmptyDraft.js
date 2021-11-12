import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectStyle,
  selectTextDirection,
  deleteDraft,
  changeCurrentDraft,
} from "../Features/InputSlice";
import { DarkMode, lightMode } from "../Features/Styles";


const EmptyDraft = ({ value, id }) => {
  const [isShown, setIsShown] = useState(false);
  const newStyle = useSelector(selectStyle);
   const style = newStyle === true ? DarkMode.styleLight : lightMode.styleLight;
  const darkStyle =
    newStyle === true ? DarkMode.styleDark : lightMode.styleDark;
  const dispatch = useDispatch();

  const text = useSelector(selectTextDirection);

  const handleDeleteDraft = (e) => {
    e.stopPropagation();
    dispatch(
      deleteDraft({
        id,
      })
    );
  };

  const handleDraftClick = (e) => {
    e.stopPropagation();
    dispatch(
      changeCurrentDraft({
        id,
      })
    );
  };

  return (
    <>
      <div className="" style={style} onClick={handleDraftClick}>
        <div className="d-flex w-100">
          {darkStyle.color === "black" ? (
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
                readOnly
                // eslint-disable-next-line
                style={({ cursor: "pointer" }, darkStyle)}
                value={value}
                type="text"
                className={`w-100 p-2 py-3 border-0 text-truncate bg-transparent ${
                  text ? "textDirectionLeft" : "textDirectionRight"
                }`}
                placeholder="Empty draft..."
              />
            </fieldset>
            {isShown && (
              <button
                className={`btn shadow-none border-0 `}
                style={style}
                onClick={handleDeleteDraft}
              >
                <i
                  className={`fas fa-times-circle ${
                    darkStyle.color === "black"
                      ? "draftBtnHoverLight"
                      : "draftBtnHover"
                  } `}
                ></i>
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default EmptyDraft;

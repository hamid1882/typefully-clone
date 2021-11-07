import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteDraft, selectStyle, selectTextDirection } from "../Features/InputSlice";

const EmptyDraft = ({ value, data, id }) => {
  const [isShown, setIsShown] = useState(false);
  const dispatch = useDispatch();
  const newStyle = useSelector(selectStyle)
  const style = newStyle.styleLight;
  const darkStyle = newStyle.styleDark;

  let keyValue = 100;

  const handleDeleteDraft = () => {
    dispatch(
      deleteDraft({
        item: value,
        id: keyValue++
      })
    );
  };

  const text = useSelector(selectTextDirection);


  return (
    <>
      <div key={id} style={style}>
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
                value={data}
                type="text"
                className={`w-100 p-2 py-3 border-0 text-truncate bg-transparent ${text ? 'textDirectionLeft' : 'textDirectionRight'}`}
                placeholder="Empty draft..."
              />
            </fieldset>
            {isShown && (
              <button
                onClick={handleDeleteDraft}
                className={`btn shadow-none border-0 `}
                style={style}
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

import { useState, useContext } from "react";
import {useDispatch} from 'react-redux';
import {deleteDraft} from '../Features/TodoSlice'
import { darkContext, mainContext } from "../Context";


const EmptyDraft = ({data}) => {
  const [isShown, setIsShown] = useState(false);
  const { style, styleDark, state } = useContext(darkContext);
  const { textCount } = useContext(mainContext);
  const dispatch = useDispatch();

  const handleDeleteDraft = () => {
    dispatch(deleteDraft({
      item: data,
    }))
  }

  return (
    <>
    {data.split('\n\n\n').map(item => {
      return (

          <div style={style}>
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
                    value={item}
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
                  <button onClick={handleDeleteDraft} className={`btn shadow-none border-0 `} style={style}>
                    <i
                      className={`fas fa-times-circle ${
                        state.darkStyle.color === "black"
                          ? "draftBtnHoverLight"
                          : "draftBtnHover"
                      } `}
                    ></i>
                  </button>
                )}
              </div>
            </div>
          </div>
      )
    })}
    </>
  );
};

export default EmptyDraft;

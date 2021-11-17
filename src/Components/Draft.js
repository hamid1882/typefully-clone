import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectStyle,
  selectDraftCollapse,
  selectScrollBar,
  newDraft,
  selectDraftList,
} from "../Features/InputSlice";
import EmptyDraft from "./EmptyDraft";

const Draft = () => {
  const [countDraft, handleCount] = useState(1);
  const newStyle = useSelector(selectStyle);

  const style = newStyle === false ? "styleLight" : "styleLightDark";
  const darkStyle = newStyle === false ? "styleDark" : "styleDarkDark";

  const collapse = useSelector(selectDraftCollapse);
  const scroll = useSelector(selectScrollBar);
  const dispatch = useDispatch();
  const draft = useSelector(selectDraftList);
  const selectCollapse = useSelector(selectDraftCollapse);

  const handleAddDraft = () => {
    dispatch(newDraft());
  };

  return (
    <div
      className={`transitionDraft draftPosition draftMini overflow-hidden ${
        selectCollapse ? "draftBefore" : "draftAfter"
      } ${darkStyle}`}
    >
      <div
        className="overflow-hidden"
        style={
          collapse
            ? { height: "calc(100vh - 2.5rem)" }
            : { height: "calc(100vh - 0.3rem)" }
        }
        id="tweet-div"
      >
        <div
          className={`font h-100  ${
            scroll ? "border-end shadow scroll tweet-overflow" : "scroll"
          } ${style}`}
        >
          <div
            className={`d-flex justify-content-center align-items-center m-1 ${style}`}
          >
            <button
              onClick={() => handleCount(1)}
              className={`btnActive mx-2 rounded px-2 py-1 border-0 col shadow-none outline-none ${
                countDraft === 1 ? darkStyle : style
              }`}
            >
              <div> Drafts </div>
            </button>
            <button
              onClick={() => handleCount(2)}
              className={`mx-2 rounded px-2 py-1 border-0 col ${
                countDraft === 2 ? darkStyle : style
              }`}
            >
              <div>Schedule</div>
            </button>
            <button
              onClick={() => handleCount(3)}
              className={`mx-2 rounded px-2 py-1 border-0 col ${
                countDraft === 3 ? darkStyle : style
              }`}
            >
              <div> Tweets </div>
            </button>
          </div>

          <div
            className={`${countDraft === 1 ? "d-block" : "d-none"} ${style}`}
          >
            <button
              onClick={() => handleAddDraft(3)}
              className={`${style} w-100 shadow-none p-3 border-0 border-top border-bottom rounded-0 d-flex justify-content-right align-items-center`}
            >
              <i className="fa fa-plus"></i>
              <span className="mx-2">New Draft</span>
            </button>

            {/* Empty draft rendering */}
            {draft.map(([id, value]) => (
              <EmptyDraft value={value} id={id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Draft;

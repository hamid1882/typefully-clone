import { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { saveDraft } from "../Features/TodoSlice";
import { darkContext, mainContext } from "../Context";
import { useSelector } from "react-redux";
import { selectInputChange } from "../Features/TodoSlice";
import EmptyDraft from "./EmptyDraft";

const Draft = () => {
  const { state } = useContext(mainContext);
  const { style, styleDark, draftCollapse } = useContext(darkContext);
  const [countDraft, handleCount] = useState(1);

  const dispatch = useDispatch();
  const inputData = useSelector(selectInputChange);
  const renderData = inputData[inputData.length - 1].item;

  const addDraft = () => {
    dispatch(
      saveDraft({
        item: renderData,
      })
    );
  };

  return (
    <div
      className={`transitionDraft draftPosition draftMini ${
        draftCollapse.transform === "translate(-250px)"
          ? "draftAfter"
          : "draftBefore"
      }`}
      style={styleDark}
    >
      <div
        className={`font h-100 ${
          state.scrollBar === true ? "scroll" : "border-end border-secondary"
        }`}
        style={(draftCollapse, style)}
      >
        <div
          style={style}
          className="d-flex justify-content-center align-items-center m-1"
        >
          <button
            onClick={() => handleCount(1)}
            style={countDraft === 1 ? styleDark : style}
            className="btnActive mx-2 rounded px-2 py-1 border-0 col shadow-none outline-none"
          >
            <div> Drafts </div>
          </button>
          <button
            onClick={() => handleCount(2)}
            style={countDraft === 2 ? styleDark : style}
            className="mx-2 rounded px-2 py-1 border-0 col "
          >
            <div>Schedule</div>
          </button>
          <button
            onClick={() => handleCount(3)}
            style={countDraft === 3 ? styleDark : style}
            className="mx-2 rounded px-2 py-1 border-0 col "
          >
            <div> Tweets </div>
          </button>
        </div>

        <div
          style={style}
          className={`${countDraft === 1 ? "d-block" : "d-none"}`}
        >
          <button
            onClick={addDraft}
            style={style}
            className="btn w-100 shadow-none p-3 border-0 border-top border-bottom rounded-0 d-flex justify-content-right align-items-center"
          >
            <i className="fa fa-plus "></i>
            <span className="mx-2">New Draft</span>
          </button>

          {/* Empty draft rendering */}
            <EmptyDraft data={renderData}/>
        </div>

        {/* scheduled */}
        {/* <div
          style={style}
          className={`${countDraft === 2 ? "d-block" : "d-none"}`}
        >
          <button
            style={style}
            className="btn w-100 shadow-none p-3 border-0 border-top border-bottom rounded-0"
            onClick={addDraft}
          >
            <i className="fa fa-plus collapse"></i>
            <span className="mx-2">New Draft</span>
          </button>

          {inputData.map((item) => (
             <EmptyDraft id={item.id} value={item.item} />
          ))}
        </div> */}

        {/* Tweet */}
        {/* <div
          style={style}
          className={`${countDraft === 3 ? "d-block" : "d-none"}`}
        >
          <button
            style={style}
            className="btn w-100 shadow-none p-3 border-0 border-top border-bottom rounded-0"
            onClick={addDraft}
          >
            <i className="fa fa-plus collapse"></i>
            <span className="mx-2">New Draft</span>
          </button>

          {inputData.map((item) => (
             <EmptyDraft id={item.id} value={item.item}/>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Draft;

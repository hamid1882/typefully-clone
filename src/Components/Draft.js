import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveDraft, selectStyle, selectDraftList, selectInputChange, selectDraftCollapse, selectDraftView, selectScrollBar } from "../Features/InputSlice";
import EmptyDraft from "./EmptyDraft";

const Draft = () => {
  const [countDraft, handleCount] = useState(1);
  const newStyle = useSelector(selectStyle);
  const style = newStyle.styleLight;
  const darkStyle = newStyle.styleDark;

  const dispatch = useDispatch();
  const inputData = useSelector(selectInputChange);
  const renderData = inputData[inputData.length - 1].item;
  const draftData = useSelector(selectDraftList);
  let increment = 0;

  const addDraft = () => {
    dispatch(
      saveDraft({
        item: " ",
        id: increment++,
      })
    );
  };

  const draftCollapse = useSelector(selectDraftCollapse);

  const collapse = useSelector(selectDraftView);
  const scroll = useSelector(selectScrollBar);


  return (
    <div
      className={`transitionDraft draftPosition draftMini overflow-hidden ${
        draftCollapse.transform === "translate(-250px)"
          ? "draftAfter"
          : "draftBefore"
      }`}
      style={darkStyle}
    >
      <div
        className="overflow-hidden"
        style={
          collapse === "d-block"
            ? { height: "calc(100vh - 2.5rem)" }
            : { height: "calc(100vh - 0.3rem)" }
        }
        id="tweet-div"
      >
        <div className={`font h-100  ${scroll ? 'border-end shadow scroll tweet-overflow' : 'scroll'}`} style={(draftCollapse, style)}>
          <div
            style={style}
            className="d-flex justify-content-center align-items-center m-1 "
          >
            <button
              onClick={() => handleCount(1)}
              style={countDraft === 1 ? darkStyle : style}
              className="btnActive mx-2 rounded px-2 py-1 border-0 col shadow-none outline-none"
            >
              <div> Drafts </div>
            </button>
            <button
              onClick={() => handleCount(2)}
              style={countDraft === 2 ? darkStyle : style}
              className="mx-2 rounded px-2 py-1 border-0 col "
            >
              <div>Schedule</div>
            </button>
            <button
              onClick={() => handleCount(3)}
              style={countDraft === 3 ? darkStyle : style}
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
              className="btn w-100 shadow-none sticky-top p-3 border-0 border-top border-bottom rounded-0 d-flex justify-content-right align-items-center"
            >
              <i className="fa fa-plus"></i>
              <span className="mx-2">New Draft</span>
            </button>

            {/* Empty draft rendering */}
              {draftData.map((item) => (
                <EmptyDraft id={item.id} value={item.item} data={renderData} />
              ))}
          </div>

          {/* scheduled */}
          <div
          style={style}
          className={`${countDraft === 2 ? "d-block" : "d-none"}`}
          >
          <button
          style={style}
          className="btn w-100 shadow-none p-3 border-0 border-top border-bottom rounded-0 d-flex justify-content-right align-items-center"
          onClick={addDraft}
          >
            <i className="fa fa-plus"></i>
            <span className="mx-2">New Draft</span>
          </button>
          
           {draftData.map((item) => (
                <EmptyDraft key={item.id} value={item.item} data={renderData} />
              ))}
        </div>

          {/* Tweet */}
          <div
          style={style}
          className={`${countDraft === 3 ? "d-block" : "d-none"}`}
          >
          <button
          style={style}
          className="btn w-100 shadow-none p-3 border-0 border-top border-bottom rounded-0 d-flex justify-content-right align-items-center"
          onClick={addDraft}
          >
          <i className="fa fa-plus "></i>
          <span className="mx-2">New Draft</span>
          </button>
          
           {draftData.map((item) => (
                <EmptyDraft key={item.id} value={item.item} data={renderData} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Draft;

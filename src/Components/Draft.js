import { useContext, useState } from "react";
import { darkContext } from "../Context";
import EmptyDraft from "./EmptyDraft";

const Draft = (props) => {
  const mode = useContext(darkContext);
  const [draftCheck, setdraftCheck] = useState(false);
  const [countDraft, setcountDraft] = useState(1);

  const handleDraftCheck = () => {
    setdraftCheck(true);
    if (draftCheck === true) {
      props.handleAddDraft();
    }
  };

  const handleCount = (index) => {
    setcountDraft(index);
  };

  return (
    <div
      style={
        (mode.style,
        mode.draftCollapse.transform === "translate(-500px)"
          ? { width: "5%", transition: "all 800ms easeIn" }
          : { width: '30%', transition: "all 800ms easeIn" })
      }
      className="transitionDraft d-none d-lg-block"
    >
      <div className="font scroll h-100" style={mode.draftCollapse}>
        <div
          style={mode.style}
          className="d-flex justify-content-center align-items-center m-1"
        >
          <button
            onClick={() => handleCount(1)}
            style={countDraft === 1 ? mode.styleDark : mode.style}
            className="btnActive mx-2 rounded px-2 py-1 border-0 col shadow-none outline-none"
          >
           <div> Drafts </div>
          </button>
          <button
            onClick={() => handleCount(2)}
            style={countDraft === 2 ? mode.styleDark : mode.style}
            className="mx-2 rounded px-2 py-1 border-0 col "
          >
            <div>Schedule</div>
          </button>
          <button
            onClick={() => handleCount(3)}
            style={countDraft === 3 ? mode.styleDark : mode.style}
            className="mx-2 rounded px-2 py-1 border-0 col "
          >
           <div> Tweets </div>
          </button>
        </div>

        <div
          style={mode.style}
          className={`${countDraft === 1 ? "d-block" : "d-none"}`}
        >
          <button
            style={mode.style}
            className="btn w-100 shadow-none p-3 border-0 border-top border-bottom rounded-0"
            onClick={handleDraftCheck}
          >
            <i className="fa fa-plus mode.collapse"></i>
            <span className="mx-2">New Draft</span>
          </button>

          {draftCheck && <EmptyDraft input={props.input} />}
        </div>

      {/* scheduled */}
        <div
          style={mode.style}
          className={`${countDraft === 2 ? "d-block" : "d-none"}`}
        >
          <button
            style={mode.style}
            className="btn w-100 shadow-none p-3 border-0 border-top border-bottom rounded-0"
            onClick={handleDraftCheck}
          >
            <i className="fa fa-plus mode.collapse"></i>
            <span className="mx-2">New Draft</span>
          </button>

          {draftCheck && <EmptyDraft input={props.input} />}
        </div>

        {/* Tweet */}
        <div style={mode.style} className={`${countDraft === 3 ? 'd-block' : 'd-none'}`}>
          <button
            style={mode.style}
            className="btn w-100 shadow-none p-3 border-0 border-top border-bottom rounded-0"
            onClick={handleDraftCheck}
          >
            <i className="fa fa-plus mode.collapse"></i>
            <span className="mx-2">New Draft</span>
          </button>

        {draftCheck &&
        <EmptyDraft input={props.input} />}
        </div>
      </div>
    </div>
  );
};

export default Draft;

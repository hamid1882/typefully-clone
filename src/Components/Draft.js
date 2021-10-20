import { useContext } from "react";
import DarkContext from "../context/DarkContext";

import "../App.css";

const Draft = (props) => {
  const mode = useContext(DarkContext);

  return (
    <div
      style={
        (mode.style,
        mode.draftCollapse.transform === "translate(-280px)"
          ? { width: "5%", transition: 'all 2s easeIn' }
          : { transition: 'all 2s easeIn'} )}
      className="transitionDraft d-none d-lg-block"
    >
      <div className={`font scroll h-100`} style={mode.draftCollapse}>
        <div
          style={mode.style}
          className="d-flex justify-content-center align-items-center m-1 overflow-hidden"
        >
          <button
            style={mode.styleDark}
            className="btnActive mx-2 rounded px-2 py-1 border-0 col shadow-none outline-none"
          >
            Drafts
          </button>
          <button
            style={mode.style}
            className="mx-2 rounded px-2 py-1 border-0 col "
          >
            Scheduled
          </button>
          <button
            style={mode.style}
            className="mx-2 rounded px-2 py-1 border-0 col "
          >
            Tweeted
          </button>
        </div>
        <div style={mode.style}>
          <button
            style={mode.style}
            className="btn w-100 shadow-none p-3 border-0 border-top border-bottom rounded-0"
            onClick={props.handleAddDraft}
          >
            <i className="fa fa-plus mode.collapse"></i>
            <span className="mx-2">New Draft</span>
          </button>
        </div>
        {props.addDraft}
      </div>
    </div>
  );
};

export default Draft;

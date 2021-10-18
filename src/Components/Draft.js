import { useContext } from "react";
import DarkContext from "../context/DarkContext";

import "../App.css";

const Draft = (props) => {
  const mode = useContext(DarkContext);


  return (
    <div style={mode.style} className="d-none d-lg-flex">
      <div
        className={`${mode.draftCollapse} font scroll `}
        style={
          mode.collapse === "d-block"
            ? { height: "calc(100vh - 2rem)" }
            : { height: "100vh" }
        }
      >
        <div className="d-flex justify-content-center align-items-center m-1 overflow-hidden">
          <button
            style={mode.style}
            className="mx-2 rounded px-2 py-1 border-0 col shadow-none outline-none"
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
        <div style={mode.style} className="p-2 border-bottom border-top">
          <button style={mode.style} className="btn w-100 shadow-none" onClick={props.handleAddDraft}>
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

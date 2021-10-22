import React, { useContext } from "react";
import DarkContext from "../Context/DarkContext";
import ReactTooltip from "react-tooltip";
import "../App.css";

const Editor = (props) => {
  const context = useContext(DarkContext);

  return (
    <>
      <div style={context.style} className="overflow-hidden d-flex p-2">
        <ReactTooltip />
        <div
          // eslint-disable-next-line
          style={context.style}
          className="col d-flex rounded-pill border justify-content-end align-items-center overflow-hidden mx-1 "
        >
          <button
            style={context.style}
            className={`border-0 p-2 mx-1 ${context.collapse}`}
            data-tip="New Draft"
          >
            <i className={`fa fa-file float-hover `}></i>
          </button>
          <button
            style={context.style}
            onClick={props.handleAddTweet}
            data-tip="Add Tweet"
            className={`border-0 p-2 mx-1 ${context.collapse}`}
          >
            <i className="fa fa-plus-square float-hover"></i>
          </button>
          <button
            style={context.style}
            data-tip="Add Images"
            className={`border-0 p-2 mx-1 ${context.collapse}`}
          >
            <i className="fa fa-images float-hover"></i>
          </button>

          <button
            style={context.style}
            data-tip="Zen Mode"
            onClick={context.handleCollapse}
            className={`border-0  p-2 mx-1 `}
          >
            {context.collapse === "d-block" ? (
              <i className={`fa fa-expand-alt float-hover `}></i>
            ) : (
              <i
                className={`fa fa-compress-alt float-hover ${
                  context.collapse === "d-block" ? "" : "floatactive"
                }`}
              ></i>
            )}
          </button>
        </div>
        <div className="d-md-none mx-2 ">
          <button
            disabled={props.input === ""}
            className="border-0 btn btn-primary rounded-circle"
          >
            <i className="fa fa-paper-plane p-2 py-3 fs-2 text-light"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default Editor;

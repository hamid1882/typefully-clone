import React, { useContext } from "react";
import DarkContext from "../context/DarkContext";
import ReactTooltip from "react-tooltip";
import "../App.css";

const Editor = (props) => {
  const context = useContext(DarkContext);

  return (
    <>
      <div
        style={context.style}
        className="container d-flex justify-content-center align-items-center p-2 w-100 gap-2"
      >
        <ReactTooltip />
        <div
          style={context.style}
          className="col d-flex justify-content-end align-items-center rounded-pill p-2 overflow-hidden mx-2"
        >
          <button
            style={context.style}
            onClick={props.handleAddDraft}
            className={`border-0 p-2 mx-1 ${context.collapse}`}
            data-tip="New Draft"
          >
            <i className={`fa fa-file fs-5 float-hover `}></i>
          </button>
          <button
            style={context.style}
            onClick={props.handleAddTweet}
            data-tip="Add Tweet"
            className={`border-0 p-2 mx-1 ${context.collapse}`}
          >
            <i className="fa fa-plus-square fs-5 float-hover"></i>
          </button>
          <button
            style={context.style}
            data-tip="Add Images"
            className={`border-0 p-2 mx-1 ${context.collapse}`}
          >
            <i className="fa fa-images fs-5 float-hover"></i>
          </button>

          <button
            style={context.style}
            data-tip="Zen Mode"
            onClick={context.handleCollapse}
            className={`border-0  p-2 mx-1 `}
          >
            {context.collapse === "d-block" ? (
              <i className={`fa fa-expand-alt fs-5 float-hover `}></i>
            ) : (
              <i
                className={`fa fa-compress-alt fs-5 float-hover ${
                  context.collapse === "d-block" ? "" : "floatactive"
                }`}
              ></i>
            )}
          </button>
        </div>
        <div className="d-md-none my-2 ">
          <button
            disabled={props.input === ""}
            className="border-0 btn btn-primary rounded-circle"
          >
            <i className="fa fa-paper-plane p-2 py-3 fs-3 text-light"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default Editor;

import React, { useContext } from "react";
import ReactTooltip from "react-tooltip";
import { darkContext, mainContext } from "../Context";

const Floatingicons = () => {
  const {style, collapse,handleCollapse, state} = useContext(darkContext);
  const { input, handleDeleteDraft, } = useContext(mainContext);

  const handleNewTweet = () => {
    console.log("add new tweet")
  }
  

  return (
    <>
      <div style={style} className="overflow-hidden d-flex p-2 justify-content-center align-items-center">
        <ReactTooltip />
        <div
          // eslint-disable-next-line
          style={style}
          className={`col d-flex rounded-pill justify-content-end align-items-center overflow-hidden mx-1 ${state.darkStyle.color === "white" ? 'iconsShadow' : 'iconsShadowDark'}`}
        >
          <button
          onClick={handleDeleteDraft}
            style={style}
            className={`border-0 p-2 mx-1 ${collapse}`}
            data-tip="New Draft"
          >
            <i className={`fa fa-file float-hover `}></i>
          </button>
          <button
            style={style}
            onClick={handleNewTweet}
            data-tip="Add Tweet"
            className={`border-0 p-2 mx-1 ${collapse}`}
          >
            <i className="fa fa-plus-square float-hover"></i>
          </button>
          <button
            style={style}
            data-tip="Add Images"
            className={`border-0 p-2 mx-1 ${collapse}`}
          >
            <i className="fa fa-images float-hover"></i>
          </button>

          <button
            style={style}
            data-tip="Zen Mode"
            onClick={handleCollapse}
            className={`border-0  p-2 mx-1 `}
          >
            {collapse === "d-block" ? (
              <i className={`fa fa-expand-alt float-hover `}></i>
            ) : (
              <i
                className={`fa fa-compress-alt float-hover ${
                  collapse === "d-block" ? "" : "floatactive"
                }`}
              ></i>
            )}
          </button>
        </div>
        <div className="d-md-none mx-2 ">
          <button
            disabled={input === ""}
            className="border-0 btn btn-primary rounded-circle"
          >
            <i className="fa fa-paper-plane p-2 py-3 fs-2 text-light"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default Floatingicons;

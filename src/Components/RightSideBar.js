import React, { useContext } from "react";
import Tweets from "./Tweets";
import { darkContext, mainContext } from "../Context";

export const TweetButton = () => {
  const { isEmptyInput, isTweets, isTextInLimit } = useContext(mainContext);
  return (<button disabled={isEmptyInput || isTextInLimit} className="btn btn-primary rounded-pill mx-2 col text-white">
    <div className="d-flex justify-content-center align-items-center">
      <i className="fa fa-paper-plane fs-4"></i>
      <span className="mx-2 text-truncate">
        {isTweets ? "Tweet All" : "Tweet"}
      </span>
    </div>
  </button>);
}

export const SchduleButton = () => {
  const { isEmptyInput } = useContext(mainContext);
  console.log(isEmptyInput);
  return (<button
    disabled={isEmptyInput}
    type='button'
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
    className="btn btn-warning rounded-pill col text-white shadow-none"
  >
    <div className="d-flex justify-content-center align-items-center">
      <i className="fa fa-clock fs-4"></i>
      <span className="p-2 text-truncate">Schedule</span>
    </div>
  </button>);
}


const RightSideBar = ({ children }) => {
  const dark = useContext(darkContext);

  return (
    <div style={dark.style} className="font-style">
      <div
        style={
          dark.collapse === "d-block"
            ? { height: "calc(100vh - 8rem)" }
            : { height: "calc(100vh - 0.5rem)" }
        }
        id="tweet-div"
      >
        <Tweets />
      </div>
      <div
        style={dark.style}
        className={`d-flex text-center justify-content-center ${dark.collapse}`}
      >
        {children}
      </div>
    </div>
  );
};

export default RightSideBar;

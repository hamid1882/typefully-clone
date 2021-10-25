import React, { useContext } from "react";
import Tweets from "./Tweets";
import Schedule from "./Schedule";
import { darkContext, mainContext } from "../Context";

const RightSideBar = () => {
  const {style, collapse, styleDark } = useContext(darkContext);
  const { input, handleAddTweet, checkLimit, tweetAllCheck } = useContext(mainContext)

  return (
    <div style={style} className="font-style">
      <div
        style={
          collapse === "d-block"
            ? { height: "calc(100vh - 8rem)" }
            : { height: "calc(100vh - 0.5rem)" }
        }
        id="tweet-div"
      >
        <Tweets
          styleDark={styleDark}
          style={style}
          input={input}
          handleAddTweet={handleAddTweet}
        />
      </div>
      <div
        style={style}
        className={`d-flex text-center justify-content-center ${collapse}`}
      >
        <button
          disabled={input === ""}
          type='button'
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          className="btn btn-warning rounded-pill col text-white shadow-none"
        >
          <div className="d-flex justify-content-center align-items-center">
            <i className="fa fa-clock fs-4"></i>
            <span className="p-2 text-truncate">Schedule</span>
          </div>
        </button>
        <Schedule />
        <button
          disabled={checkLimit}
          className="btn btn-primary rounded-pill mx-2 col text-white"
        >
          <div className="d-flex justify-content-center align-items-center">
            <i className="fa fa-paper-plane fs-4"></i>
            <span className="mx-2 text-truncate">
              {tweetAllCheck}
            </span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default RightSideBar;

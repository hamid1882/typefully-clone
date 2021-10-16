import React, { useContext } from "react";
import Tweets from "./Tweets";
import "../App.css";
import DarkContext from "../context/DarkContext";

const RightSideBar = (props) => {
  const a = useContext(DarkContext);

  return (
    <div style={a.style} className="font-style height-draft overflow-hidden">
      <div
        style={
          a.collapse === "d-block"
            ? { height: "calc(100vh - 6rem)" }
            : { height: "100vh" }
        }
        id="tweet-div"
      >
        <Tweets style={a.style} input={props.input} handleAddTweet={props.handleAddTweet} />
      </div>
      <div
        style={a.style}
        className={`d-flex text-center justify-content-center py-2 pb-5 ${a.collapse}`}
      >
        <button
          disabled={props.input === ""}
          className="btn btn-warning rounded-pill mx-2 col text-white"
        >
          <i className="fa fa-clock"></i>
          <span className="mx-2">Schedule</span>
        </button>
        <button
          disabled={props.input === "" || props.input.length >= 280}
          className="btn btn-primary rounded-pill mx-2 col text-white"
        >
          <i className="fa fa-paper-plane"></i>
          <span className="mx-2">
            {props.input.includes("\n\n\n") ? "Tweet All" : "Tweet"}
          </span>
        </button>
      </div>
    </div>
  );
};

export default RightSideBar;

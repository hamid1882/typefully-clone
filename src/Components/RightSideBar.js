import React, { useContext } from "react";
import Tweets from "./Tweets";
import "../App.css";
import DarkContext from "../Context/DarkContext";
import Schedule from "./Schedule";

const RightSideBar = (props) => {
  const a = useContext(DarkContext);

  return (
    <div style={a.style} className="font-style">
      <div
        style={
          a.collapse === "d-block"
            ? { height: "calc(100vh - 8rem)" }
            : { height: "calc(100vh - 0.5rem)" }
        }
        id="tweet-div"
      >
        <Tweets
          styleDark={a.styleDark}
          style={a.style}
          input={props.input}
          handleAddTweet={props.handleAddTweet}
        />
      </div>
      <div
        style={a.style}
        className={`d-flex text-center justify-content-center ${a.collapse}`}
      >
        <button
          disabled={props.input === ""}
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
          disabled={props.input === "" || props.input.length >= 280}
          className="btn btn-primary rounded-pill mx-2 col text-white"
        >
          <div className="d-flex justify-content-center align-items-center">
            <i className="fa fa-paper-plane fs-4"></i>
            <span className="mx-2 text-truncate">
              {props.input.includes("\n\n\n") ? "Tweet All" : "Tweet"}
            </span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default RightSideBar;

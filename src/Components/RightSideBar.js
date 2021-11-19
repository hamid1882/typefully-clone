import Tweets from "./Tweets";
import { useSelector } from "react-redux";
import {
  selectStyle,
  selectInput,
  selectNavCollapsed
} from "../Features/InputSlice";
import { DarkMode, lightMode } from "../Features/Styles";

const RightSideBar = ({ children, setInputFocus }) => {
  const newStyle = useSelector(selectStyle);
  const style = newStyle === true ? DarkMode.styleLight : lightMode.styleLight;
  const collapse = useSelector(selectNavCollapsed);

  return (
    <div style={style} className="font-style">
      <div
        style={
          collapse === false
            ? { height: "calc(100vh - 7rem)" }
            : { height: "calc(100vh)" }
        }
        id="tweet-div"
        className={`${collapse ? "tweetBtnAfter" : "none"}`}
      >
        <Tweets setInputFocus={setInputFocus}/>
      </div>
      <div
        style={style}
        className="d-flex text-center justify-content-center px-2"
      >
        {children}
      </div>
    </div>
  );
};

export const TweetButton = () => {
  const renderValue = useSelector(selectInput);

  return (
    <button
      disabled={
        renderValue === "" || renderValue.length >= 280
      }
      className="btn btn-primary rounded-pill mx-2 col text-white"
    >
      <div className="d-flex justify-content-center align-items-center">
        <i className="fa fa-paper-plane fs-6"></i>
        <span className="mx-2 text-truncate">
          {renderValue.includes("\n\n\n") ? "Tweet All" : "Tweet"}
        </span>
      </div>
    </button>
  );
};

export const ScheduleButton = () => {
  const renderValue = useSelector(selectInput);

  return (
    <button
      disabled={renderValue === ""}
      type="button"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
      className="btn bg-warning rounded-pill col text-white shadow-none"
    >
      <div className="d-flex justify-content-center align-items-center">
        <i className="fa fa-clock fs-6"></i>
        <span className="p-2 text-truncate">Schedule</span>
      </div>
    </button>
  );
};

export default RightSideBar;

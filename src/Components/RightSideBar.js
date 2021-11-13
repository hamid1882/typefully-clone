import Tweets from "./Tweets";
import { useSelector } from "react-redux";
import {
  selectDraftList,
  selectDraftView,
  selectStyle,
} from "../Features/InputSlice";
import { DarkMode, lightMode } from "../Features/Styles";

const RightSideBar = ({ children }) => {
  const newStyle = useSelector(selectStyle);
  const style = newStyle === true ? DarkMode.styleLight : lightMode.styleLight;
  const collapse = useSelector(selectDraftView);

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
        <Tweets />
      </div>
      <div
        style={style}
        className={`d-flex text-center justify-content-center ${collapse}`}
      >
        {children}
      </div>
    </div>
  );
};

export const TweetButton = () => {
  const renderValue = useSelector(selectDraftList);

  return (
    <button
      disabled={
        renderValue.toString() === "" || renderValue.toString().length > 280
      }
      className="btn btn-primary rounded-pill mx-2 col text-white"
    >
      <div className="d-flex justify-content-center align-items-center">
        <i className="fa fa-paper-plane fs-4"></i>
        <span className="mx-2 text-truncate">
          {renderValue.includes("\n\n\n") ? "Tweet All" : "Tweet"}
        </span>
      </div>
    </button>
  );
};

export const ScheduleButton = () => {
  const renderValue = useSelector(selectDraftList);

  return (
    <button
      disabled={renderValue.toString() === ""}
      type="button"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
      className="btn btn-warning rounded-pill col text-white shadow-none"
    >
      <div className="d-flex justify-content-center align-items-center">
        <i className="fa fa-clock fs-4"></i>
        <span className="p-2 text-truncate">Schedule</span>
      </div>
    </button>
  );
};

export default RightSideBar;

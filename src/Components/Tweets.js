import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import ReactTooltip from "react-tooltip";
import { useSelector, useDispatch } from "react-redux";
import {
  newTweet,
  selectFocus,
  selectStyle,
  selectTextDirection,
  selectTweetThread,
} from "../Features/InputSlice";
import { DarkMode, lightMode } from "../Features/Styles";

const Tweets = ({ text }) => {
  const renderValue = useSelector(selectTweetThread);
  const newStyle = useSelector(selectStyle);
  const style = newStyle === true ? DarkMode.styleLight : lightMode.styleLight;
  const darkStyle =
    newStyle === true ? DarkMode.styleDark : lightMode.styleDark;

  const textDirection = useSelector(selectTextDirection);
  const dispatch = useDispatch();

  const setInputFocus = useSelector(selectFocus);

  const addNewTweet = () => {
    dispatch(newTweet());
    setInputFocus.focusRef();
  };

  const [currentFocus, setcurrentFocus] = useState(false);

  console.log(text);

  return (
      <div className="d-flex">
        <div style={style} className="w-100 position-relative">
          <div className="cursor">
            <div
              style={
                text === ""
                  ? null
                  : { backgroundColor: "rgba(29, 161, 242, 0.2)" }
              }
              className="d-flex px-2 "
            >
              <div style={{ width: "70px" }} className="text-center py-2">
                <img
                  style={{ width: "50px", height: "50px" }}
                  className="rounded-circle mx-0"
                  src="https://pbs.twimg.com/profile_images/1420523735472214017/uMRf2FIm_400x400.jpg"
                  alt="dp"
                ></img>
                {renderValue.length > 1 && (
                  <div
                    style={{
                      width: "2px",
                      backgroundColor: "gray",
                      height: "100%",
                      marginRight: "auto",
                      marginLeft: "auto",
                      marginTop: "1px",
                    }}
                  ></div>
                )}
              </div>
              <div className="overflow-hidden w-100 mx-1">
                <div className="d-flex align-items-center mx-1">
                  <h3
                    style={darkStyle}
                    className=" m-1 text-truncate bg-transparent"
                  >
                    Hamid Hussain
                  </h3>
                  <span className="form-text">@hussainhafeez5</span>
                </div>

                <div>
                  <TextareaAutosize
                    readOnly
                    value={text}
                    style={darkStyle}
                    minRows={1}
                    maxRows={15}
                    placeholder="Your Tweet will appear here..."
                    className={`cursor bg-transparent tweet-text-area overflow-hidden resize-0 py-2 shadow-none form-control ${
                      text.length >= 280 ? "border-3 border-danger" : "border-0"
                    } 
                          ${
                            textDirection
                              ? "textDirectionLeft"
                              : "textDirectionRight"
                          }`}
                  />
                </div>
                <p
                  className={`form-text text-auto mx-3 ${
                    text === "" ? "invisible" : "visible"
                  } ${text.length >= 280 ? "text-danger" : "null"}`}
                >
                  {text.length + "/280"}
                </p>
              </div>
            </div>
          </div>
          <ReactTooltip />
        </div>
      </div>
  );
};

export default Tweets;

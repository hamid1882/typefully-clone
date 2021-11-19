import TextareaAutosize from "react-textarea-autosize";
import ScrollToBottom from "react-scroll-to-bottom";
import ReactTooltip from "react-tooltip";
import { useSelector, useDispatch } from "react-redux";
import {
  newTweet,
  selectStyle,
  selectTextDirection,
  selectTweetThread,
} from "../Features/InputSlice";
import { DarkMode, lightMode } from "../Features/Styles";

const Tweets = ({ setInputFocus }) => {
  const renderValue = useSelector(selectTweetThread);
  const newStyle = useSelector(selectStyle);
  const style = newStyle === true ? DarkMode.styleLight : lightMode.styleLight;
  const darkStyle =
    newStyle === true ? DarkMode.styleDark : lightMode.styleDark;

  const textDirection = useSelector(selectTextDirection);
  const dispatch = useDispatch();

  const addNewTweet = () => {
    dispatch(newTweet());
    setInputFocus();
  };

  return (
    <ScrollToBottom className="h-100 w-100">
      <div className="d-flex">
        <div style={style} className="w-100 mb-5 position-relative">
          {renderValue.map((text, i) => {
            return (
              <div key={i} className="cursor ">
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
                        style={darkStyle}
                        minRows={1}
                        maxRows={15}
                        value={text}
                        placeholder="Your Tweet will appear here..."
                        className={`cursor bg-transparent tweet-text-area overflow-hidden resize-0 py-2 shadow-none form-control ${
                          text.length >= 280
                            ? "border-3 border-danger"
                            : "border-0"
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
            );
          })}
          <ReactTooltip />
          <div
            className={`flex text-center align-items-center justify-content-center ${
              renderValue.toString() === "" ? "invisible" : "visible"
            }`}
          >
            <button
              onClick={addNewTweet}
              data-tip="Add tweet or Just add two new lines to break the tweet "
              className="btn shadow-none"
            >
              <i className="fa fa-plus text-secondary fs-5 float-hover"></i>
            </button>
            <button data-tip="Spread the Word" className="btn">
              <i className="fa fa-star text-secondary fs-5"></i>
            </button>
          </div>
        </div>
      </div>
    </ScrollToBottom>
  );
};

export default Tweets;

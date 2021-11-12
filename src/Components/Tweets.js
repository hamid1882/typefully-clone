import TextareaAutosize from "react-textarea-autosize";
import ScrollToBottom from "react-scroll-to-bottom";
import ReactTooltip from "react-tooltip";
import { useSelector } from "react-redux";
import {
  selectStyle,
  selectTextDirection,
  selectTweetThread
} from "../Features/InputSlice";

const Tweets = () => {
  const renderValue = useSelector(selectTweetThread);
  const newStyle = useSelector(selectStyle);
  const style = newStyle.styleLight;
  const darkStyle = newStyle.styleDark;

  const textDirection = useSelector(selectTextDirection);

  return (
    <ScrollToBottom className="h-100 w-100">
      <div className={`d-flex`}>
        <div style={style} className="w-100 mb-5">
          {renderValue
            .map((text) => {
              return (
                <div>
                  <div
                    style={
                      renderValue.toString() === ""
                        ? null
                        : { backgroundColor: "rgba(29, 161, 242, 0.2)" }
                    }
                    className="d-flex "
                  >
                    <div className="text-center my-2 position-relative">
                      <img
                        style={{ width: "50px", height: "50px" }}
                        className="rounded-circle mx-3"
                        src="https://pbs.twimg.com/profile_images/1420523735472214017/uMRf2FIm_400x400.jpg"
                        alt="dp"
                      ></img>
                      {renderValue.toString().includes("\n\n\n") && (
                        <div
                          className="position-absolute"
                          style={{
                            width: "2px",
                            backgroundColor: "gray",
                            height: "100%",
                            left: "40px",
                            top: "53px",
                          }}
                        ></div>
                      )}
                    </div>
                    <div className="overflow-hidden w-100">
                      <div className="d-flex align-items-center mx-1">
                        <h3
                          style={darkStyle}
                          className="py-1 m-1 text-truncate bg-transparent"
                        >
                          Hamid Hussain
                        </h3>
                        <span className="form-text">@hussainhafeez5</span>
                      </div>
                      <fieldset disabled>
                        <TextareaAutosize
                          style={darkStyle}
                          minRows={1}
                          maxRows={15}
                          value={text}
                          placeholder="Your Tweet will appear here..."
                          className={`bg-transparent tweet-text-area overflow-hidden resize-0 py-2 shadow-none form-control ${
                            renderValue.toString().length >= 280
                              ? "border-3 border-danger"
                              : "border-0"
                          } 
                          ${
                            textDirection
                              ? "textDirectionLeft"
                              : "textDirectionRight"
                          }`}
                        />
                      </fieldset>
                      <p
                        className={`form-text text-auto mx-3 ${
                          renderValue === "" ? "invisible" : "visible"
                        } ${
                          text >= 280
                            ? "text-danger"
                            : ""
                        }`}
                      >
                        {renderValue.includes("\n\n\n")
                          ? text.length
                          : text.length + "/280"}
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

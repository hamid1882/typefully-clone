import { useContext } from 'react'
import TextareaAutosize from "react-textarea-autosize";
import ScrollToBottom from "react-scroll-to-bottom";
import ReactTooltip from "react-tooltip";
import { darkContext, mainContext } from '../Context';

const Tweets = () => {
  const { style, styleDark : darkStyle} = useContext(darkContext);
  const { textCount, input, handleAddTweet } = useContext(mainContext);

  return (
    <ScrollToBottom className="h-100 w-100 ">
      <div className={`d-flex`}>
        <div style={style} className="w-100 mb-5">
          <div>
            {input.split("\n\n\n").map((text) => {
              return (
                <>
                  <div
                    style={
                      text === ""
                        ? null
                        : { backgroundColor: "rgba(29, 161, 242, 0.2)" }
                    }
                    className="d-flex"
                  >
                    <div className="text-center p-2 overflow-hidden">
                      <img
                        style={{ width: "50px", height: "50px"}}
                        className="rounded-circle"
                        src="https://pbs.twimg.com/profile_images/1420523735472214017/uMRf2FIm_400x400.jpg"
                        alt="dp"
                      ></img>
                      {input.includes("\n\n\n") && (
                        <div
                          style={{
                            width: "2px",
                            backgroundColor: "gray",
                            height: "100%",
                            margin: "0 auto",
                            marginTop: "3px",
                            marginBottom: "3px",
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
                            text.length >= 280
                              ? "border border-danger"
                              : "border-0"
                          } ${textCount === 1 ? 'textDirectionLeft' : "textDirectionRight"}`}
                        />
                      </fieldset>
                      <p
                        className={`form-text text-auto mx-3 ${
                          text === "" ? "invisible" : "visible"
                        } ${text.length >= 280 ? "text-danger" : ""}`}
                      >
                        {input.includes("\n\n\n")
                          ? text.length
                          : text.length + "/280"}
                      </p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <ReactTooltip />
          <div
            className={`flex text-center align-items-center justify-content-center ${
              input === "" ? "invisible" : "visible"
            }`}
          >
            <button
              data-tip="Add tweet or Just add two new lines to break the tweet "
              className="btn"
              onClick={handleAddTweet}
            >
              <i className="fa fa-plus text-secondary fs-5"></i>
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

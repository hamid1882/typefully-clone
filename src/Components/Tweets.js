import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import "../App.css";
import ScrollToBottom from "react-scroll-to-bottom";

const Tweets = (props) => {
  return (
    <ScrollToBottom className="h-100 w-100 tweet-auto-flow tweet-auto-overflow">
      <div className={`d-flex mx-3`}>
        <div style={props.style} className="w-100">
          <div>
            {props.input.split("\n\n\n").map((text) => {
              return (
                <>
                  <div className="d-flex">
                    <div style={props.style} className="p-2 mb-5">
                      <img
                        style={{ width: "50px", height: "50px" }}
                        className="rounded-circle"
                        src="https://pbs.twimg.com/profile_images/1420523735472214017/uMRf2FIm_400x400.jpg"
                        alt="dp"
                      ></img>
                      {props.input.includes("\n\n\n") && (
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
                    <div>
                      <div className="d-flex align-items-center">
                        <h3 className="py-1 m-1 text-truncate">
                          Hamid Hussain
                        </h3>
                        <span className="form-text text-truncate">
                          @hussainhafeez5
                        </span>
                      </div>
                      <fieldset disabled>
                        <TextareaAutosize
                          style={props.style}
                          minRows={1}
                          maxRows={15}
                          value={text}
                          placeholder="Your Tweet will appear here..."
                          className={`tweet-text-area overflow-hidden resize-0 py-2 shadow-none form-control  ${
                            props.input === ""
                              ? props.style
                              : "bg-info bg-opacity-10"
                          } ${
                            text.length >= 280
                              ? "border border-danger"
                              : "border-0"
                          }`}
                        />
                      </fieldset>
                      <p
                        className={`form-text text-auto mx-3 ${
                          text === "" ? "invisible" : "visible"
                        } ${text.length >= 280 ? "text-danger" : ""}`}
                      >
                        {props.input.includes("\n\n\n")
                          ? text.length
                          : text.length + "/280"}
                      </p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <div
            className={`flex text-center align-items-center justify-content-center ${
              props.input === "" ? "invisible" : "visible"
            }`}
          >
            <button className="btn" onClick={props.handleAddTweet}>
              <i className="fa fa-plus text-secondary mx-2 fs-5 p-1"></i>
            </button>
            <button className="btn">
              <i className="fa fa-star text-secondary mx-2 fs-5 p-1"></i>
            </button>
          </div>
        </div>
      </div>
    </ScrollToBottom>
  );
};

export default Tweets;

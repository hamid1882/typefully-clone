import React from "react";

const About = (props) => {
  return (
    <div>
      <div className={`${props.toggleTab === 5 ? "d-block" : "d-none"}`}>
        <h1 style={props.contextDarkStyle} className="bg-transparent">
          About
        </h1>
        <div className="my-4">
          <h4 style={props.contextDarkStyle} className="bg-transparent">
            Made by Hamid Hussain
          </h4>
          <hr />
          <p>
            Iam building Typefully-clone to help you write and publish condensed
            ideas and also to improve my coding Skills!
          </p>
        </div>
        <div
          style={props.contextDarkStyle}
          className="shadow rounded p-3 text-center"
        >
          <img
            style={{ width: "100px", height: "100px" }}
            className="rounded-circle mt-2"
            src="https://pbs.twimg.com/profile_images/1420523735472214017/uMRf2FIm_400x400.jpg"
            alt="dp"
          ></img>
          <h4 style={props.contextDarkStyle} className="bg-transparent mt-1">
            Hamid Hussain
          </h4>
        </div>
        <div className="my-3">
          <button
            style={props.contextDarkStyle}
            className="btn my-2 d-flex rounded-pill justify-content-center align-items-center gap-2 w-100 shadow-none p-2"
          >
            <i className="fa fa-list"></i>
            <span>Changelog</span>
          </button>
          <a
          href="https://twitter.com/hussainhafeez5"
            style={props.contextDarkStyle}
            className="btn d-flex rounded-pill justify-content-center align-items-center gap-2 w-100 shadow-none p-2"
          >
            <i className="fa fa-inbox"></i>
            <span>Get in Touch</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;

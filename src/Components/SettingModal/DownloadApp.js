import React from "react";

const DownloadApp = (props) => {
  return (
    <div>
      <div className={`${props.toggleTab === 4 ? "d-block" : "d-none"}`}>
        <h1 style={props.contextDarkStyle} className="bg-transparent">
          App
        </h1>
        <div>
          <p>Get the code data of this app on github</p>
          <a
            href="https://github.com/Hamid-hussain/typefully-clone"
            style={
              props.contextDarkStyle.color === "black"
                ? { backgroundColor: "#1da1f2", color: "white" }
                : { backgroundColor: "#802fff", color: "white" }
            }
            className="btn w-100 rounded-pill shadow"
          >
            Get Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;

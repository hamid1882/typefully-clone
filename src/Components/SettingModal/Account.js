import React from "react";
import SelectLocation from "./SelectLocation";

const Account = (props) => {
  return (
    <div className={`${props.toggleTab === 1 ? "d-block" : "d-none"}`}>
      <h1 style={props.contextDarkStyle} className="bg-transparent">
        Account
      </h1>
      <div
        style={props.contextStyle}
        className="d-flex my-4 justify-content-between"
      >
        <div className="d-flex justify-content-center align-items-center">
          <img
            style={{ width: "50px", height: "50px" }}
            className="rounded-circle"
            src="https://pbs.twimg.com/profile_images/1420523735472214017/uMRf2FIm_400x400.jpg"
            alt="dp"
          ></img>
          <div className="mx-2">
            <h3
              style={props.contextDarkStyle}
              className="text-truncate bg-transparent my-1"
            >
              Hamid Hussain
            </h3>
            <span className="form-text mx-1">@hussainhafeez5</span>
          </div>
        </div>

        <div
          style={{ width: "20%" }}
          className="d-none d-md-block d-flex py-2 mx-4"
        >
          <button
            style={(props.contextStyle, props.contextDarkStyle)}
            className="btn d-flex justify-content-center align-items-center rounded-pill w-100 fs-5 gap-2"
          >
            <i className="fas fa-sign-out-alt"></i>
            <span>Log Out</span>
          </button>
        </div>
      </div>
      <h2 style={props.contextDarkStyle} className="bg-transparent">
        TimeZone
      </h2>
      <hr />
      <p>Used for tweet scheduling and the queue</p>
      <div style={props.contextStyle} className="d-flex justify-content-between align-items-center gap-3">
        <SelectLocation
          contextStyle={props.contextStyle}
          contextDarkStyle={props.contextDarkStyle}
        />
        <button
          style={props.contextDarkStyle}
          className="btn p-2 w-25 bg-transparent d-flex gap-2 justify-content-center align-items-center text-center border rounded"
        >
          <i className="fa fa-map-marker-alt fs-5"></i>
          <span className="fs-5">Detect</span>
        </button>
      </div>


      <div className="d-flex gap-2 justify-content-between fs-5 my-2 align-items-center p-2">
        <div style={props.contextDarkStyle} className="d-flex bg-transparent gap-2 justify-content-start align-items-center">
          <i className="fa fa-envelope"></i>
          <span>Get major updates via email</span>
        </div>
        <div>
          <div className="form-check form-switch">
            <input
              className="form-check-input p-2 m-2"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckChecked"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;

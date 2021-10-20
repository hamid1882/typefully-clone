import React from 'react'

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
        </div>
  )
}

export default Account

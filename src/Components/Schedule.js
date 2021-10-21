import { useContext } from "react";
import DarkContext from "../context/DarkContext";
import "../App.css";
import QueueNew from "./QueueNew";

const Schedule = () => {
  const context = useContext(DarkContext);
  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div style={context.style} className="modal-dialog ">
          <div style={context.style} className="modal-content p-3">
            <div
              style={context.style}
              className="d-flex justify-content-between align-items-center px-2"
            >
              <h3
                style={context.styleDark}
                className="modal-title bg-transparent"
                id="exampleModalLabel"
              >
                Schedule Tweet
              </h3>
              <button
                style={context.styleDark}
                type="button"
                className={`${
                  context.styleDark.color === "black"
                    ? "btn-close"
                    : "btn-close btn-close-white bg-transparent"
                }  rounded-circle shadow-none`}
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>Choose a time here</p>
              <input
                style={context.styleDark}
                className="w-100 rounded border-0 p-2"
                placeholder="In 3 hours, or tomorrow at 2pm"
              ></input>
            </div>
            <p>Or pick an available slot:</p>
            <div
              style={context.styleDark}
              className="heightSchedule border rounded-3 scroll"
            >
              <QueueNew />
            </div>
            <div className="my-3 d-flex justify-content-center">
              <button
                type="button"
                data-bs-dismiss="modal"
                aria-label="Close"
                className="btn btn-warning rounded-pill w-50 shadow-none"
              >
                <div style={context.styleDark} className="d-flex bg-transparent justify-content-center align-items-center">
                  <i className="fa fa-clock fs-4"></i>
                  <span className="p-2 text-truncate">Schedule</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Schedule;

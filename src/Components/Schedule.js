import {useSelector} from 'react-redux';
import { selectStyle } from "../Features/TodoSlice";
import QueueNew from "./QueueNew";

const Schedule = () => {
  const newStyle = useSelector(selectStyle);
  const style = newStyle[newStyle.length - 1].styleLight;
  const darkStyle = newStyle[newStyle.length - 1].styleDark;

  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div style={style} className="modal-dialog rounded-3 shadow">
          <div style={style} className="modal-content p-3 rounded-3">
            <div
              style={style}
              className="d-flex justify-content-between align-items-center px-2"
            >
              <h3
                style={darkStyle}
                className="modal-title bg-transparent"
                id="exampleModalLabel"
              >
                Schedule Tweet
              </h3>
              <button
                style={darkStyle}
                type="button"
                className={`${
                  darkStyle.color === "black"
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
                type="datetime-local"
                style={darkStyle}
                className="w-100 rounded border-0 p-2 kickOutline"
                placeholder="In 3 hours, or tomorrow at 2pm"
              ></input>
            </div>
            <p>Or pick an available slot:</p>
            <div
              style={darkStyle}
              className="heightSchedule rounded-3 shadow scroll tweet-auto-overflow mx-3"
            >
              <QueueNew />
            </div>
            <div className="my-3 mt-5 d-flex justify-content-center ">
              <button
                type="button"
                data-bs-dismiss="modal"
                aria-label="Close"
                className="btn btn-warning rounded-pill w-75 shadow-none"
              >
                <div
                  style={darkStyle}
                  className="d-flex bg-transparent justify-content-center align-items-center"
                >
                  <i className="fa fa-clock fs-4"></i>
                  <span className="p-2 text-truncate">Schedule</span>
                </div>
              </button>
            </div>
            <div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Schedule;

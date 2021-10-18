import { useContext } from "react";
import DarkContext from "../context/DarkContext";

const Queue = () => {
  const context = useContext(DarkContext);
  return (
    <div style={context.style} className=" w-100 p-2 vh-100">
      <div className="container my-4">
        <div
          style={context.style}
          className="d-flex justify-content-center gap-2 py-3"
        >
          <button
            style={context.style}
            className="btn btn-primary rounded-pill"
          >
            Edit Schedule
          </button>
          <button
            style={context.style}
            className="btn btn-primary rounded-pill"
          >
            Timezone
          </button>
        </div>

        <div style={context.style}>
          <p>Today</p>
          <div style={context.style} className="border rounded shadow">
            <div className="d-flex gap-3 align-items-center border-0 border-bottom p-2 py-3 text-primary">
              <i className="fa fa-plus"></i>
              <span>Schedule Draft</span>
            </div>
            <div className="p-2 py-3">12:00 pm</div>
          </div>

          <div style={context.style} className="border rounded shadow my-3">
            <div className="d-flex gap-3 align-items-center border-0 border-bottom p-2 py-3 text-primary">
              <i className="fa fa-plus"></i>
              <span>Schedule Draft</span>
            </div>
            <div style={context.style} className="p-2 py-3">
              05:00 pm
            </div>
          </div>
        </div>
      </div>
      <hr style={{ width: '100vw'}} />
      {/* Second div */}

      <div style={context.style} className="container">
        <p>Tuesday</p>
        <div>
          <div style={context.style} className="border rounded shadow">
            <div className="d-flex gap-3 align-items-center border-0 border-bottom p-2 py-3 text-primary">
              <i className="fa fa-plus"></i>
              <span>Schedule Draft</span>
            </div>
            <div className="p-2 py-3">12:00 pm</div>
          </div>

          <div style={context.style} className="border rounded shadow my-3">
            <div className="d-flex gap-3 align-items-center border-0 border-bottom p-2 py-3 text-primary">
              <i className="fa fa-plus"></i>
              <span>Schedule Draft</span>
            </div>
            <div style={context.style} className="p-2 py-3">
              05:00 pm
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Queue;

import { useContext } from "react";
import DarkContext from "../context/DarkContext";
import '../App.css'

const QueueNew = () => {
  const context = useContext(DarkContext);
  return (
    <div style={context.styleDark} className="w-100 px-2 h-100 scroll">
      <div className="container my-4">
        <div style={context.styleDark}>
          <p>Today</p>
          <div style={context.style} className="border rounded shadow">
            <div className="d-flex gap-3 align-items-center border-0 border-bottom p-2 py-3 textColor">
              <i className="fa fa-plus"></i>
              <span>Schedule Draft</span>
            </div>
            <div className="p-2 py-3">12:00 pm</div>
          </div>

          <div style={context.style} className="border rounded shadow my-3">
            <div className="d-flex gap-3 align-items-center border-0 border-bottom p-2 py-3 textColor">
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

      <div style={context.styleDark} className="container">
        <p>Tuesday</p>
        <div>
          <div style={context.style} className="border rounded shadow">
            <div className="d-flex gap-3 align-items-center border-0 border-bottom p-2 py-3 textColor">
              <i className="fa fa-plus"></i>
              <span>Schedule Draft</span>
            </div>
            <div className="p-2 py-3">12:00 pm</div>
          </div>

          <div style={context.style} className="border rounded shadow my-3">
            <div className="d-flex gap-3 align-items-center border-0 border-bottom p-2 py-3 textColor">
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

export default QueueNew;

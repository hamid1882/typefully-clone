import { useSelector } from "react-redux";
import { selectStyle } from "../Features/InputSlice";
import { DarkMode, lightMode } from "../Features/Styles";

const Queue = () => {
  const newStyle = useSelector(selectStyle);
  const style = newStyle === true ? DarkMode.styleLight : lightMode.styleLight;

  return (
    <div style={style}>
      <div style={style} className="w-100 p-2 h-100">
        <div className="container my-4">
          <div
            style={style}
            className="d-flex justify-content-center gap-2 py-3"
          >
            <button style={style} className="btn btn-primary rounded-pill">
              Edit Schedule
            </button>
            <button style={style} className="btn btn-primary rounded-pill">
              Timezone
            </button>
          </div>
          <div style={style}>
            <p>Today</p>
            <div style={style} className="border rounded">
              <div className="d-flex gap-3 align-items-center border-0 border-bottom p-2 py-3 text-primary">
                <i className="fa fa-plus"></i>
                <span>Schedule Draft</span>
              </div>
              <div className="p-2 py-3">12:00 pm</div>
            </div>
            <div style={style} className="border rounded my-3">
              <div className="d-flex gap-3 align-items-center border-0 border-bottom p-2 py-3 text-primary">
                <i className="fa fa-plus"></i>
                <span>Schedule Draft</span>
              </div>
              <div style={style} className="p-2 py-3">
                05:00 pm
              </div>
            </div>
          </div>
        </div>
        <hr style={{ width: "100vw" }} />
        {/* Second div */}
        <div style={style} className="container">
          <p>Tuesday</p>
          <div>
            <div style={style} className="border rounded">
              <div className="d-flex gap-3 align-items-center border-0 border-bottom p-2 py-3 text-primary">
                <i className="fa fa-plus"></i>
                <span>Schedule Draft</span>
              </div>
              <div className="p-2 py-3">12:00 pm</div>
            </div>
            <div style={style} className="border rounded my-3">
              <div className="d-flex gap-3 align-items-center border-0 border-bottom p-2 py-3 text-primary">
                <i className="fa fa-plus"></i>
                <span>Schedule Draft</span>
              </div>
              <div style={style} className="p-2 py-3">
                05:00 pm
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Queue;

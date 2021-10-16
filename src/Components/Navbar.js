import { useContext } from "react";
import SwitchMode from "./SwitchMode";
import DarkContext from "../context/DarkContext";
import "../App.css";
import ReactTooltip from "react-tooltip";

const Navbar = () => {
  const a = useContext(DarkContext);

  return (
    <nav
      style={a.style}
      className={`navbar navbar-expand-lg shadow border-bottom ${a.collapse}`}
    >
      <ReactTooltip />
      <div className="container-fluid">
        <button
          onClick={a.handleDraftCollapse}
          style={a.style}
          className=" btnHover border-0 px-2 py-1 rounded"
          data-tip="Collapse"
        >
          <i className="fas fa-stream"></i>
        </button>
        <div className="d-flex mx-auto align-items-center">
          <button
            className="btnActive btnHover mx-2 rounded px-2 py-1 border-0"
            style={a.style}
            data-tip="Write"
          >
            <i className="fas fa-pen ">
              <span className="mx-2 d-none d-md-inline-block">Write</span>
            </i>
          </button>
          <button
            style={a.style}
            className="btnHover mx-2 rounded px-2 py-1 border-0"
            data-tip="Queue"
          >
            <i className="fas fa-calendar">
              <span className="mx-2 d-none d-md-inline-block">Queue</span>
            </i>
          </button>
          <button
            style={a.style}
            className="btnHover mx-2 rounded px-2 py-1 border-0"
            data-tip="Grow"
          >
            <i className="fas fa-chart-line">
              <span className="mx-2 d-none d-md-inline-block">Grow</span>
            </i>
          </button>
          <div className="d-none d-md-block">
            <SwitchMode onClick={a.handleStyle} btnText={a.btnText} />
          </div>
        </div>
        <div>
          <button
            style={a.style}
            className="btnHover mx-2 rounded px-2 py-1 border-0"
            data-tip="Upgrade"
          >
            <i className="fas fa-bolt">
              <span className="mx-2 d-none d-md-inline-block">Upgrade</span>
            </i>
          </button>
          <button
            style={a.style}
            className="btnHover mx-2 rounded px-2 py-1 border-0"
            data-tip="Setting"
          >
            <i className={`fas fa-cog`}></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

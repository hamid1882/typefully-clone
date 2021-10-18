import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import DarkContext from "../context/DarkContext";
import "../App.css";
import SettingModal from "./SettingModal";

const Navbar = () => {
  const a = useContext(DarkContext);
  const location = useLocation();
  console.log(location)
  return (
    <nav
      style={a.style}
      className={`navbar navbar-expand-lg shadow border-bottom ${a.collapse}`}
    >
      <div className="container-fluid">
        <button
          onClick={a.handleDraftCollapse}
          style={a.style}
          className=" btnHover border-0 px-2 py-1 rounded"
        >
          <i className="fas fa-stream"></i>
        </button>
        <div className="d-flex mx-auto align-items-center">

          <Link
            to="/"
          className={`${location.pathname === '/' ? 'btnActive' : ''} btnHover mx-2 rounded px-2 py-1 border-0`}
            style={a.style}
          >
            <i className="fas fa-pen ">
              <span className="mx-2 d-none d-md-inline-block">Write</span>
            </i>
          </Link>

          <Link
            to="/user"
            style={a.style}
            className={`${location.pathname === '/user' ? 'btnActive' : ''} btnHover mx-2 rounded px-2 py-1 border-0`}
          >
            <i className="fas fa-calendar">
              <span className="mx-2 d-none d-md-inline-block">Queue</span>
            </i>
          </Link>

          <button
            style={a.style}
            className="btnHover mx-2 rounded px-2 py-1 border-0"
          >
            <i className="fas fa-chart-line">
              <span className="mx-2 d-none d-md-inline-block">Grow</span>
            </i>
          </button>
          <div className="d-none d-md-block"></div>
        </div>
        <div className="d-flex">
          <button
            style={a.style}
            className="btnHover mx-2 rounded px-2 py-1 border-0"
          >
            <i className="fas fa-bolt">
              <span className="mx-2 d-none d-md-inline-block">Upgrade</span>
            </i>
          </button>
          <SettingModal />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

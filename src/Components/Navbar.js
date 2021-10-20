import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import DarkContext from "../context/DarkContext";
import "../App.css";
import SettingModal from "./SettingModal";

const Navbar = () => {
  const a = useContext(DarkContext);
  const location = useLocation();
  console.log(location);
  return (
    <nav
      style={a.style}
      className={`navbar navbar-expand-lg navBorder ${a.collapse}`}
    >
      <div className="container-fluid">
        <button
          onClick={a.handleDraftCollapse}
          // eslint-disable-next-line
          style={(a.style, a.styleDark)}
          className="btnHover border-0 px-2 py-1 rounded bg-transparent shadow-none"
        >
          <i className="fas fa-align-left fs-5"></i>
        </button>
        <div className="d-flex mx-auto align-items-center">
          <Link
            to="/"
            style={location.pathname === "/" ? a.styleDark : a.style}
            className={`${
              location.pathname === "/" ? "btnActive" : ""
            } fs-5 mx-2 rounded px-2 py-1 border-0`}
          >
            <i className="fas fa-pen ">
              <span className="mx-2 d-none d-md-inline-block">Write</span>
            </i>
          </Link>

          <Link
            to="/user"
            style={location.pathname === "/user" ? a.styleDark : a.style}
            className={`${
              location.pathname === "/user" ? "btnActive" : ""
            } fs-5 mx-2 rounded px-2 py-1 border-0`}
          >
            <i className="fas fa-calendar">
              <span className="mx-2 d-none d-md-inline-block">Queue</span>
            </i>
          </Link>

          <Link
            to="/grow"
            style={a.style}
            className="fs-5 mx-2 rounded px-2 py-1 border-0"
          >
            <i className="fas fa-chart-line">
              <span className="mx-2 d-none d-md-inline-block">Grow</span>
            </i>
          </Link>
          <div className="d-none d-md-block"></div>
        </div>
        <div className="d-flex">
          <button
            style={a.style}
            className="fs-5 mx-2 rounded px-2 py-1 border-0"
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

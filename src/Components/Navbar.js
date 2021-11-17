import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SettingModal from "./SettingModal";

import {
  selectStyle,
  collapseDraft,
  selectDraftCollapse,
} from "../Features/InputSlice";

const Navbar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const newStyle = useSelector(selectStyle);

  const style = newStyle === false ? "styleLight" : "styleLightDark";
  const darkStyle = newStyle === false ? "styleDark" : "styleDarkDark";

  const selectCollapse = useSelector(selectDraftCollapse);
  const handleDraftCollapse = () => {
    dispatch(collapseDraft(!selectCollapse));
  };

  return (
    <nav className={`${style} navbar navbar-expand-lg navBorder p-1`}>
      <div className="container-fluid fs-6">
        <button
          onClick={handleDraftCollapse}
          className={`${darkStyle} btnHover border-0 px-2 py-1 rounded-3 bg-transparent shadow-none`}
        >
          <i className="fas fa-align-left"></i>
        </button>
        <div className="d-flex mx-auto align-items-center ">
          <Link
            to="/"
            className={`${
              location.pathname === "/" ? darkStyle : style
            } fs-6 mx-2 rounded-3 btnActive px-2 py-1 border-0 d-flex align-items-center`}
          >
            <i className="fas fa-pen ">
              <span className="mx-2 d-none d-md-inline-block font">Write</span>
            </i>
          </Link>

          <Link
            to="/user"
            className={`${
              location.pathname === "/user" ? darkStyle : style
            } fs-6 mx-2 rounded-3 btnActive px-2 py-1 border-0 d-flex align-items-center`}
          >
            <i className="fas fa-calendar">
              <span className="mx-2 d-none d-md-inline-block font">Queue</span>
            </i>
          </Link>

          <button
            className={`${style} fs-6 mx-2 rounded-3 px-2 py-1 border-0 d-flex align-items-center`}
          >
            <i className="fas fa-chart-line">
              <span className="mx-2 d-none d-md-inline-block font">Grow</span>
            </i>
          </button>
          <div className="d-none d-md-block"></div>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <button
            className={`${darkStyle} fs-6 mx-2 rounded-3 px-2 py-2 border-0 d-flex justify-content-center align-items-center`}
          >
            <i className="fas fa-bolt"></i>
            <span
              className="mx-2 font d-none d-md-inline-block"
              data-testid="upgrade-btn"
            >
              Upgrade
            </span>
          </button>
          <SettingModal />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

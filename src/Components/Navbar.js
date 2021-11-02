import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SettingModal from "./SettingModal";
import {
  selectStyle,
  selectDraftCollapse,
  selectDraftView,
  collapseDraft,
} from "../Features/TodoSlice";

const Navbar = () => {
  // const { collapse } = useContext(darkContext);
  const location = useLocation();
  const newStyle = useSelector(selectStyle);
  const style = newStyle[newStyle.length - 1].styleLight;
  const darkStyle = newStyle[newStyle.length - 1].styleDark;
  

  const draftColl = useSelector(selectDraftCollapse);
  const draftCollapse = draftColl[draftColl.length - 1];

  const dispatch = useDispatch();

  const handleDraftCollapse = () => {
    if(draftCollapse.transform === "translate(-250px)") {
      dispatch(collapseDraft(draftColl[0]))
    } else {
      dispatch(
        collapseDraft({
          transition: "all 1000ms",
          transform: "translate(-250px)",
        })
      );
  };
}

  const draftView = useSelector(selectDraftView);
  const collapse = draftView[draftView.length - 1]

  return (
    <nav
      style={style}
      className={`navbar navbar-expand-lg navBorder ${collapse} p-1`}
    >
      <div className="container-fluid fs-6">
        <button
          onClick={handleDraftCollapse}
          // eslint-disable-next-line
          style={darkStyle}
          className="btnHover border-0 px-2 py-1 rounded-3 bg-transparent shadow-none "
        >
          <i className="fas fa-align-left"></i>
        </button>
        <div className="d-flex mx-auto align-items-center ">
          <Link
            to="/"
            style={location.pathname === "/" ? darkStyle : style}
            className={`${
              location.pathname === "/" ? "btnActive" : ""
            } fs-6 mx-2 rounded-3 px-2 py-1 border-0 d-flex align-items-center`}
          >
            <i className="fas fa-pen ">
              <span className="mx-2 d-none d-md-inline-block font">Write</span>
            </i>
          </Link>

          <Link
            to="/user"
            style={location.pathname === "/user" ? darkStyle : style}
            className={`${
              location.pathname === "/user" ? "btnActive" : ""
            } fs-6 mx-2 rounded-3 px-2 py-1 border-0 d-flex align-items-center`}
          >
            <i className="fas fa-calendar">
              <span className="mx-2 d-none d-md-inline-block font">Queue</span>
            </i>
          </Link>

          <button
            style={style}
            className="fs-6 mx-2 rounded-3 px-2 py-1 border-0 d-flex align-items-center"
          >
            <i className="fas fa-chart-line">
              <span className="mx-2 d-none d-md-inline-block font">Grow</span>
            </i>
          </button>
          <div className="d-none d-md-block"></div>
        </div>
        <div className="d-flex">
          <button
            style={style}
            className="fs-6 mx-2 rounded-3 px-2 py-1 border-0 d-flex align-items-center"
          >
            <i className="fas fa-bolt">
              <span className="mx-2 d-none d-md-inline-block font">
                Upgrade
              </span>
            </i>
          </button>
          <SettingModal />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

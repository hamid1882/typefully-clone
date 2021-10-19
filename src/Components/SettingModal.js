import { useContext } from "react";
import DarkContext from "../context/DarkContext";
import SwitchMode from "./SwitchMode";
import "../App.css";

const SettingModal = () => {
  const context = useContext(DarkContext);

  return (
    <div style={context.style}>
      <button
        style={context.styleDark}
        className="btn fs-5 mx-2 rounded px-2 py-1 border-0 shadow-none bg-transparent navBorder"
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        <i className={`fas fa-cog`}></i>
      </button>

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="container w-100 model">
          <div style={context.style} className="modal-dialog ">
            <div style={context.style} className="modal-content">
              <div
                style={context.styleDark}
                className="modal-header bg-transparent"
              >
                <h5 className="modal-title" id="staticBackdropLabel">
                  Settings
                </h5>
                <button
                  style={context.styleDark}
                  type="button"
                  className={`${context.styleDark.color === 'black' ? "btn-close" : "btn-close btn-close-white bg-transparent"}  rounded-circle shadow-none`}
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div
                style={context.style}
                className="modal-body d-flex align-items-center mx-2 gap-2"
              >
                {/* <h3>{context.btnText}</h3> */}
                <SwitchMode
                  style={context.styleDark}
                  btnText={context.btnText}
                  onClick={context.handleStyle}
                  handleDarkStyle={context.handleDarkStyle}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingModal;

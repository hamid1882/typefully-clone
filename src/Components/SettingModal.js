import { useContext } from "react";
import DarkContext from "../context/DarkContext";
import SwitchMode from "./SwitchMode";

const SettingModal = () => {
  const context = useContext(DarkContext);

  return (
    <div style={context.style}>
      <button
        style={context.style}
        className="btn btnHover mx-2 rounded px-2 py-1 border-0"
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
        <div className="container w-100">
          <div style={context.style} className="modal-dialog ">
            <div style={context.style} className="modal-content">
              <div style={context.style} className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">
                  Settings
                </h5>
                <button
                  style={context.style}
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div
                style={context.style}
                className="modal-body d-flex align-items-center mx-2 gap-2"
              >
                {/* <h3>{context.btnText}</h3> */}
                <SwitchMode btnText={context.btnText} onClick={context.handleStyle} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingModal;

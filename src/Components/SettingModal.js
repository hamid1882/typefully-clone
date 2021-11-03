import {useSelector} from 'react-redux';
import SettingModalUI from "./SettingModal/SettingModalUI";
import {selectStyle} from '../Features/TodoSlice';

const SettingModal = () => {

  const newStyle = useSelector(selectStyle);
  const style = newStyle[newStyle.length - 1].styleLight;
  const darkStyle = newStyle[newStyle.length - 1].styleDark;


  return (
    <div style={style}>
      <button
        style={darkStyle}
        className="btn d-flex align-items-center fs-5 mx-2 rounded-3 px-2 py-1 border-0 shadow-none bg-transparent navBorder"
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
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="container w-100 model rounded-3">
          <div style={style} className="modalWidth modal-dialog rounded-3 shadow">
            <div style={style} className="modalWidth modal-content bg-transparent">
              <div
                style={darkStyle}
                className="modal-header bg-transparent"
              >
                <h5 className="modal-title" id="staticBackdropLabel">
                  Settings
                </h5>
                <button
                  style={darkStyle}
                  type="button"
                  className={`${darkStyle.color === 'black' ? "btn-close" : "btn-close btn-close-white bg-transparent"}  rounded-circle shadow-none`}
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
                {/* <h3>{context.btnText}</h3> */}
                <SettingModalUI />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingModal;

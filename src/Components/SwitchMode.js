import React from "react";

const SwitchMode = (props) => {
  return (
    <div className="d-flex gap-3 align-items-center mx-1">
      <h3>{props.btnText}</h3>
      <div className="form-check form-switch">
        <input
          className="form-check-input mx-2"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckChecked"
          onClick={props.onClick}
        />
      </div>
    </div>
  );
};

export default SwitchMode;

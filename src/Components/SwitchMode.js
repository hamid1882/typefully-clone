import React from "react";

const SwitchMode = (props) => {
  return (
    <div>
      <div class="form-check form-switch mx-lg-2">
        <input
          class="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckChecked"
          onClick={props.onClick}
        />
        <label class="form-check-label" for="flexSwitchCheckChecked">
          {props.btnText}
        </label>
      </div>
    </div>
  );
};

export default SwitchMode;

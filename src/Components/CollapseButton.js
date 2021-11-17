import React from "react";
import '../App.scss'

const CollapseButton = () => {
  return (
    <div>
      <button
        className="btnHover border-0 px-2 py-1 bg-light rounded"
        data-toggle="tooltip"
        data-placement="auto"
        title="Close"
      >
        <i className="fas fa-stream"></i>
      </button>
    </div>
  );
};

export default CollapseButton;

import {useContext} from "react";
import { darkContext } from "../../Context";

const Buttons = (props) => {
  const context = useContext(darkContext);
  return (
    <div className="m-3 p-1 w-25">
      <button
        onClick={() => props.handleToggleTab(1)}
        style={props.toggleTab === 1 ? context.styleDark : context.style}
        className="btn border-0 shadow-none w-100 my-2 d-flex align-items-center gap-2 fs-5"
      >
        <i className="fas fa-user-alt"></i>
        <span className="d-none d-md-block">Account</span>
      </button>
      <button
        onClick={() => props.handleToggleTab(2)}
        style={props.toggleTab === 2 ? context.styleDark : context.style}
        className="btn border-0 shadow-none w-100 my-2 d-flex align-items-center gap-2 fs-5"
      >
        <i className="fas fa-image"></i>
        <span className="d-none d-md-block">Look</span>
      </button>
      <button
        onClick={() => props.handleToggleTab(3)}
        style={props.toggleTab === 3 ? context.styleDark : context.style}
        className="btn border-0 shadow-none w-100 my-2 d-flex align-items-center gap-2 fs-5"
      >
        <i className="fas fa-edit"></i>
        <span className="d-none d-md-block">Editing</span>
      </button>
      <button
        onClick={() => props.handleToggleTab(4)}
        style={props.toggleTab === 4 ? context.styleDark : context.style}
        className="btn border-0 shadow-none w-100 my-2 d-flex align-items-center gap-2 fs-5"
      >
        <i className="fas fa-download"></i>
        <span className="d-none d-md-block">App</span>
      </button>
      <button
        onClick={() => props.handleToggleTab(5)}
        style={props.toggleTab === 5 ? context.styleDark : context.style}
        className="btn border-0 shadow-none w-100 my-2 d-flex align-items-center gap-2 fs-5"
      >
        <i className="fas fa-heart"></i>
        <span className="d-none d-md-block">About</span>
      </button>
    </div>
  );
};

export default Buttons;

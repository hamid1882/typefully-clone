import { useState, useContext } from "react";
import { darkContext } from "../../Context";

const About = (props) => {
  const { handleStyle, handleDarkStyle, styleDark, style, state } =
    useContext(darkContext);

  const [modeCount, setmodeCount] = useState(1);

  const handleDisplayMode = (index) => {
    setmodeCount(index);
  };

  const handleDarkMode = () => {
    handleDisplayMode(2);
    if (state.darkStyle.color === "black") {
      handleStyle();
      handleDarkStyle();
    }
  };

  const handleLightMode = () => {
    handleDisplayMode(1);
    if (state.darkStyle.color === "white") {
      handleStyle();
      handleDarkStyle();
    }
  };

  return (
    <div
      className={`${props.toggleTab === 2 ? "d-block" : "d-none"} h-100 px-2`}
    >
      <h1 style={styleDark} className="bg-transparent">
        Look
      </h1>
      <div className="my-4">
        <h3 style={styleDark} className="bg-transparent">
          Dark Mode
        </h3>
        <hr />
        <p>Automatically used when your system is set to dark mode.</p>
        <div style={style} className="d-flex border rounded-pill p-1">
          <button
            onClick={handleLightMode}
            style={modeCount === 1 ? styleDark : style}
            className="col btn rounded-pill shadow-none border-0"
          >
            Light
          </button>
          <button
            onClick={handleDarkMode}
            style={modeCount === 2 ? styleDark : style}
            className="col btn rounded-pill shadow-none border-0"
          >
            Dark
          </button>
          <buttons
            onClick={() => handleDisplayMode(3)}
            style={modeCount === 3 ? styleDark : style}
            className="col btn rounded-pill shadow-none border-0"
          >
            System
          </buttons>
        </div>
      </div>
    </div>
  );
};

export default About;

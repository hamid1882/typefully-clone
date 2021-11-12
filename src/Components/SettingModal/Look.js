import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DarkMode, lightMode } from "../../Features/Styles";
import { addStyle, selectStyle } from "../../Features/InputSlice";

const About = (props) => {
  const [modeCount, setmodeCount] = useState(1);
  const dispatch = useDispatch();

  const handleDisplayMode = (index) => {
    setmodeCount(index);
  };

  // const handleDarkMode = () => {
  //   handleDisplayMode(2);
  //   dispatch(addStyle(DarkMode));
  // };

  // const handleLightMode = () => {
  //   handleDisplayMode(1);
  //   dispatch(addStyle(lightMode));
  // };
  const newStyle = useSelector(selectStyle);

  const handleTheme = () => {
    handleDisplayMode(1);
    if (newStyle === true) {
      dispatch(addStyle(false));
    } else {
      dispatch(addStyle(true));
    }
  };

  const style = newStyle === true ? DarkMode.styleLight : lightMode.styleLight;
  const darkStyle =
    newStyle === true ? DarkMode.styleDark : lightMode.styleDark;

  return (
    <div
      className={`${props.toggleTab === 2 ? "d-block" : "d-none"} h-100 px-2 `}
    >
      <h1 style={darkStyle} className="bg-transparent">
        Look
      </h1>
      <div className="my-4">
        <h3 style={darkStyle} className="bg-transparent">
          Dark Mode
        </h3>
        <hr />
        <p>Automatically used when your system is set to dark mode.</p>
        <div style={style} className="d-flex border rounded-pill p-1">
          <button
            onClick={handleTheme}
            style={modeCount === 1 ? darkStyle : style}
            className="col btn rounded-pill shadow-none border-0"
          >
            Light
          </button>
          <button
            onClick={handleTheme}
            style={modeCount === 2 ? darkStyle : style}
            className="col btn rounded-pill shadow-none border-0"
          >
            Dark
          </button>

          <buttons
            onClick={() => handleDisplayMode(3)}
            style={modeCount === 3 ? darkStyle : style}
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

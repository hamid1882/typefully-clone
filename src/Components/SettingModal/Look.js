import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addStyle, selectStyle } from "../../Features/TodoSlice";

const About = (props) => {
  const [modeCount, setmodeCount] = useState(1);
  const dispatch = useDispatch();
  const newStyle = useSelector(selectStyle);
  const style = newStyle[newStyle.length - 1].styleLight;
  const darkStyle = newStyle[newStyle.length - 1].styleDark;

  const handleDisplayMode = (index) => {
    setmodeCount(index);
  };
  
  const darkMode = () => {
    handleDisplayMode(2);
    dispatch(
      addStyle({
        styleLight: {
          backgroundColor: "#16212c",
          color: "#738696",
          transition: "all 500ms",
          borderColor: "#2b343b",
        },
        styleDark: {
          backgroundColor: "#2c333a",
          color: "white",
          transition: "all 500ms",
          borderColor: "#2b343b",
          fontFamily: "Zen Kaku Gothic Antique, sans-serif",
        },
      })
    );
  };

  const lightMode = () => {
    handleDisplayMode(1);
    dispatch(
      addStyle({
        styleLight: newStyle[0].styleLight,
        styleDark: newStyle[0].styleDark
      })
    );
  };




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
            onClick={lightMode}
            style={modeCount === 1 ? darkStyle : style}
            className="col btn rounded-pill shadow-none border-0"
          >
            Light
          </button>
          <button
            onClick={darkMode}
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

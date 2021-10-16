import { useState } from "react";

const useDarkMode = () => {
  const [style, setStyle] = useState({
    backgroundColor: "white",
    color: "black",
  });
  const [btnText, setBtnText] = useState('Night Mode');

  
  const handleStyle = () => {
    if (style.color === "black") {
      setStyle({
        backgroundColor: "black",
        color: "white",
      });
      setBtnText('Light Mode')
    } else {
      setStyle({
        backgroundColor: "white",
        color: "black",
      });
      setBtnText('Night Mode')
    }
  };

  return [style, handleStyle, btnText];
};

export default useDarkMode;

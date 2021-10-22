import { useState, useEffect } from "react";
import MainContext from "./MainContext";

const MainState = (props) => {
  // local storage
  const initialCount = localStorage.getItem("counter")
    ? localStorage.getItem("counter")
    : "";

  // Controlled input
  const [input, setInput] = useState(initialCount);

  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  useEffect(() => {
    localStorage.setItem("counter", [input]);
  }, [input]);

  // draft state and function
  const [addDraft, setaddDraft] = useState("");

  const handleAddDraft = () => {
    setaddDraft(addDraft);
  };

  // Text Direction
  const [textCount, settextCount] = useState(1);

  const handleTextCount = (index) => {
    settextCount(index);
  };

  // Show or hide scroll Bars
  const [scrollbar, setScrollBar] = useState(false);

  const handleScrollBar = () => {
    if (scrollbar === false) {
      setScrollBar(true);
    } else {
      setScrollBar(false);
    }
  };

  return (
    <MainContext.Provider
      value={{
        input,
        handleChange,
        addDraft,
        setaddDraft,
        handleAddDraft,
        textCount,
        handleTextCount,
        scrollbar,
        handleScrollBar,
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
};

export default MainState;

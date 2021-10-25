import { useState, useEffect,useReducer } from "react";
import { mainContext as MainContext } from ".";

// function reducer(state, action) {
//   switch(action.type) {
//     case 'add-input':
//       return state.input = [...state.input]
//   }
// }

// const initialValue = {
//   input: '',
// }

export const changeInput = 'input_change';

const MainState = (props) => {

  // const [state, dispatch] = useReducer(reducer, initialValue)

  // local storage
  const initialCount = localStorage.getItem("counter")
    ? localStorage.getItem("counter")
    : "";
  

  // Controlled input
  const [input, setInput] = useState('');

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

  const checkLimit = input === "" || input.length >= 280;

  const tweetAllCheck = input.includes("\n\n\n") ? "Tweet All" : "Tweet";

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
        checkLimit,
        tweetAllCheck
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
};

export default MainState;

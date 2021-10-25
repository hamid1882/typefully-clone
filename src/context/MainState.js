import { useState, useEffect, useReducer } from "react";
import { mainContext as MainContext } from ".";
import { updateTextCount} from '../action';
import {
  textCountSelector,
  inputSelector,
  draftSelector,
  scrollbarSelector
} from '../selectors'

const initialInput = localStorage.getItem("input") || "";

const initialState = {
  input: initialInput,
  textCount: 1,
  scrollBar: false,
  draft: "",
}

const reducer = (state, {type, payload}) => {
  switch (type) {
    case "input_change":
      return {
        ...state,
        input: payload
      }
    case "add_draft":
      return {
        ...state,
        draft: payload
      }
    case "update_textcount":
      return {
        ...state,
        textCount: payload
      }
    case "update_scroll_bar":
      return {
        ...state,
        textCount: payload
      }
    case "reset":
      return initialState
    default:
      return state;
  }
}



const MainState = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const textCount = textCountSelector(state);
  const input = inputSelector(state)
  const draft = draftSelector(state);
  const scrollbar = scrollbarSelector(state);

  const handleAddDraft = (val) => {
    dispatch({
      type: "add_draft",
      payload: val
    })
  }


  const handleTextCount = (val) => {
    dispatch(updateTextCount(val))
  }

  const setScrollBar = val => {
    dispatch({
      type: "update_scroll_bar",
      payload: val
    })
  }

  const toggleScrollBar = () => {
    setScrollBar(!scrollbar)
  };


  useEffect(() => {
    localStorage.setItem("input", input);
  }, [input]);

  const isEmptyInput = input === "";
  const isTweets = input.includes("\n\n\n");
  const isTextInLimit = input.length >= 280;

  return (
    <MainContext.Provider
      value={{
        dispatch,
        state,
        input,
        isEmptyInput,
        isTextInLimit,
        isTweets,
        draft,
        handleAddDraft,
        textCount,
        handleTextCount,
        scrollbar,
        handleScrollBar: toggleScrollBar,
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
};

export default MainState;

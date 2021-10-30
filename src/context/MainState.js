import { useEffect, useReducer } from "react";
import { mainContext as MainContext } from ".";
import { updateTextCount} from '../action';
import {
  textCountSelector,
  inputSelector,
  draftSelector,
  deleteDraftSelector
} from '../selectors'

const initialInput = localStorage.getItem("input") || "";

const initialState = {
  input: initialInput,
  textCount: 1,
  scrollBar: true,
  deleteDraft: true,
}

const reducer = (state, {type, payload}) => {
  switch (type) {
    case "input_change":
      return {
        ...state,
        input: payload,
        deleteDraft: true,
      }
    case "update_textcount":
      return {
        ...state,
        textCount: payload
      }
    case "update_scroll_bar":
      return {
        ...state,
        scrollBar: false
      }
    case "update_again_scroll_bar":
      return {
        ...state,
        scrollBar: false
      }
    case "delete_draft":
      return {
        ...state,
        deleteDraft: false,
      }
    case "delete_draft_new":
      return {
        ...state,
        deleteDraft: true,
      }
    case 'add_new_tweet':
      return {
        ...state,
        input: payload + '\n\n\nNew Tweet'
      }
    default:
      return state;
  }
}



const MainState = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const textCount = textCountSelector(state);
  let input = inputSelector(state)
  const draft = draftSelector(state);
  const deleteDraft = deleteDraftSelector(state)
  // const scrollbar = scrollbarSelector(state);


  const handleNewTweet =()=> {
    dispatch({type: 'add_new_tweet'})
  }
 

  const handleTextCount = (val) => {
    dispatch(updateTextCount(val))
  }

  const handleScrollBar = () => {
    if(state.scrollBar === true) {
      dispatch({ type: 'update_scroll_bar'})
    } else {
      dispatch({ type: 'update_again_scroll_bar'})
    }
  }

  const handleDeleteDraft = () => {
    if(state.deleteDraft === true) {
      dispatch( {type: 'delete_draft'} )
    } else {
      dispatch( {type: 'delete_draft_new'} )
    }
  }

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
        deleteDraft,
        textCount,
        handleTextCount,
        handleScrollBar,
        handleDeleteDraft,
        handleNewTweet,
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
};

export default MainState;

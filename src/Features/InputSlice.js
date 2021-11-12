import { createSlice } from "@reduxjs/toolkit";
import { Collapse, lightMode } from "./Styles";

const currentDraft = 0;
export const initialState = {
  currentDraft,
  draftList: { [currentDraft]: "" },
  style: lightMode,
  draftCollapse: Collapse,
  draftView: "d-block",
  scroll: false,
  text: true,

};

const InputSlice = createSlice({
  name: "draftBox",
  initialState,
  reducers: {
    changeCurrentDraft: (state, action) => {
      state.currentDraft = action.payload.id;
    },
    saveDraft: (state, action) => {
      const { item } = action.payload;
      const id = action.payload.id || state.currentDraft;
      state.draftList[id] = item;
    },
    newDraft: (state, action) => {
      state.currentDraft++;
      state.draftList[state.currentDraft] = "";
    },
    inputChange: (state, action) => {
      const { item } = action.payload;
      const id = action.payload.id || state.currentDraft;
      state.draftList[id] = item;
    },
    deleteDraft: (state, action) => {
      delete state.draftList[action.payload.id]
      const [id, val] = Object.entries(state.draftList)[0] || [0, ""]
      state.currentDraft = id
      state.input = val
    },
    // newTweet: (state, action) => {
    //   state.input.push(action.payload);
    // },
    addStyle: (state, action) => {
      state.style = action.payload;
    },
    collapseDraft: (state, action) => {
      state.draftCollapse = action.payload;
    },
    viewDraft: (state, action) => {
      state.draftView = action.payload;
    },
    scrollBar: (state, action) => {
      state.scroll = action.payload;
    },
    textDirection: (state, action) => {
      state.text = action.payload;
    },
  },
});

export const {
  saveDraft,
  newDraft,
  changeCurrentDraft,
  deleteDraft,
  inputChange,
  // newTweet,
  addStyle,
  collapseDraft,
  viewDraft,
  scrollBar,
  textDirection,
} = InputSlice.actions;

// action creators


export const selectDraftList = (state) => Object.entries(state.draft.draftList);
export const selectCurrentDraft = (state) => state.draft.currentDraft;
export const selectInput = (state) => state.draft.draftList[selectCurrentDraft(state)];
export const selectTweetThread = (state) => state.draft.draftList[selectCurrentDraft(state)].toString().split("\n\n\n");
export const selectStyle = (state) => state.draft.style;
export const selectDraftCollapse = (state) => state.draft.draftCollapse;
export const selectDraftView = (state) => state.draft.draftView;
export const selectScrollBar = (state) => state.draft.scroll;
export const selectTextDirection = (state) => state.draft.text;

export default InputSlice.reducer;
 
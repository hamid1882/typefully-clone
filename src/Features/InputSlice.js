import { createSlice } from "@reduxjs/toolkit";
import { Collapse, lightMode } from "./Styles";

export const initialState = {
  draftList: { 0: "" },
  input: {
    item: "",
    id: 0
  },
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
    saveDraft: (state, action) => {
      const { item, id } = action.payload;
      state.draftList[id] = item;
    },
    inputChange: (state, action) => {
      const { item, id } = action.payload;
      const newItem = { item };
      state.input = newItem;
      state.draftList[id] = item;
    },
    deleteDraft: (state, action) => {
      delete state.draftList[action.payload.id]
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


export const selectDraftList = (state) => Object.values(state.draft.draftList);
export const selectInputChange = (state) => Object.values(state.draft.input);
export const selectStyle = (state) => state.draft.style;
export const selectDraftCollapse = (state) => state.draft.draftCollapse;
export const selectDraftView = (state) => state.draft.draftView;
export const selectScrollBar = (state) => state.draft.scroll;
export const selectTextDirection = (state) => state.draft.text;

export default InputSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const currentDraft = 0;
export const initialState = {
  currentDraft,
  draftList: { [currentDraft]: "" },
  draftView: "d-block",
  isDarkMode: false,
  isDraftCollapsed: false,
  navCollapsed: false,
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
    newDraft: (state) => {
      state.currentDraft++;
      state.draftList[state.currentDraft] = "";
    },
    inputChange: (state, action) => {
      const { item } = action.payload;
      const id = action.payload.id || state.currentDraft;
      state.draftList[id] = item;
    },
    deleteDraft: (state, action) => {
      delete state.draftList[action.payload.id];
      const data = Object.entries(state.draftList);
      const [id] = data[data.length - 1] || [0, ""];
      state.currentDraft = id;
    },
    newTweet: (state, action) => {
      const key = state.currentDraft;
      const [id, item] = Object.entries(state.draftList)[key]||[0];
      state.draftList[id] = item + "\n\n\nNew Tweet...";
    },
    addStyle: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
    collapseDraft: (state, action) => {
      state.isDraftCollapsed = action.payload;
    },
    collapseNav: (state, action) => {
      state.navCollapsed = action.payload;
    },
    viewDraft: (state, action) => {
      state.draftView = action.payload;
    },
    scrollBar: (state) => {
      state.scroll = !state.scroll;
    },
    textDirection: (state) => {
      state.text = !state.text;
    },
  },
});

export const {
  saveDraft,
  newDraft,
  changeCurrentDraft,
  deleteDraft,
  inputChange,
  newTweet,
  addStyle,
  collapseDraft,
  collapseNav,
  viewDraft,
  scrollBar,
  textDirection,
} = InputSlice.actions;

// action creators

export const selectDraftList = (state) => Object.entries(state.draft.draftList);
export const selectCurrentDraft = (state) => state.draft.currentDraft;
export const selectInput = (state) =>
  state.draft.draftList[selectCurrentDraft(state)];
export const selectTweetThread = (state) =>
  state.draft.draftList[selectCurrentDraft(state)].toString().split("\n\n\n");
export const selectNewTweet = (state) =>
  state.draft.draftList[selectCurrentDraft(state)];
export const selectStyle = (state) => state.draft.isDarkMode;
export const selectDraftCollapse = (state) => state.draft.isDraftCollapsed;
export const selectDraftView = (state) => state.draft.draftView;
export const selectScrollBar = (state) => state.draft.scroll;
export const selectTextDirection = (state) => state.draft.text;
export const selectNavCollapsed = (state) => state.draft.navCollapsed;

export default InputSlice.reducer;

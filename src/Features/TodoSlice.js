import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  draftList: [],
  input: [{ item: "" }],
  style: [
    {
      styleLight: {
        backgroundColor: "white",
        color: "#738696",
        borderColor: "#ecf0f4",
        transition: "all 500ms",
      },
      styleDark: {
        backgroundColor: "#e7ebef",
        color: "black",
        transition: "all 500ms",
        borderColor: "#ecf0f4",
        fontFamily: "Zen Kaku Gothic Antique, sans-serif",
      },
    },
  ],
  draftCollapse: [
    {
    transition: "all 700ms",
    borderColor: "#ecf0f4",
    transform: "translate(0px)",
  }],
  draftView : ['d-block']
};

const TodoSlice = createSlice({
  name: "draftBox",
  initialState,
  reducers: {
    saveDraft: (state, action) => {
      state.draftList.push(action.payload);
    },
    inputChange: (state, action) => {
      state.input.push(action.payload);
    },
    deleteDraft: (state, action) => {
      state.draftList.pop();
      state.input = [{ item: "" }];
    },
    newTweet: (state, action) => {
      state.input.push(action.payload);
    },
    addStyle: (state, action) => {
      state.style.push(action.payload);
    },
    collapseDraft: (state, action) => {
      state.draftCollapse.push(action.payload)
    },
    viewDraft: (state, action) => {
      state.draftView.push(action.payload)
    }
  },
});

export const { saveDraft, deleteDraft, inputChange, newTweet, addStyle, collapseDraft, viewDraft } =
  TodoSlice.actions;

// action creators

export const selectDraftList = (state) => state.draft.draftList;
export const selectInputChange = (state) => state.draft.input;
export const selectStyle = (state) => state.draft.style;
export const selectDraftCollapse = (state) => state.draft.draftCollapse;
export const selectDraftView = (state) => state.draft.draftView;

export default TodoSlice.reducer;

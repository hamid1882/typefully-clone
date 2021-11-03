import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  draftList: [],
  input: [{ item: "" , id: 0}],
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
    },
  ],
  draftView: ["d-block"],
  scroll: false,
  text: true,
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
      state.draftCollapse.push(action.payload);
    },
    viewDraft: (state, action) => {
      state.draftView.push(action.payload);
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
  newTweet,
  addStyle,
  collapseDraft,
  viewDraft,
  scrollBar,
  textDirection,
} = TodoSlice.actions;

// action creators

export const selectDraftList = (state) => state.draft.draftList;
export const selectInputChange = (state) => state.draft.input;
export const selectStyle = (state) => state.draft.style;
export const selectDraftCollapse = (state) => state.draft.draftCollapse;
export const selectDraftView = (state) => state.draft.draftView;
export const selectScrollBar = (state) => state.draft.scroll;
export const selectTextDirection = (state) => state.draft.text;


export default TodoSlice.reducer;

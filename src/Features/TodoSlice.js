import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  draftList: [],
  input: [{ item: "" }],
  style: [
    {
      styleLight : {
      backgroundColor: "white",
      color: "#738696",
      borderColor: "#ecf0f4",
      transition: "all 500ms",
    },
   styleDark : {
    backgroundColor: "#e7ebef",
    color: "black",
    transition: "all 500ms",
    borderColor: "#ecf0f4",
    fontFamily: "Zen Kaku Gothic Antique, sans-serif"
   }
  }
  ],
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
  },
});

export const { saveDraft, deleteDraft, inputChange, newTweet, addStyle } =
  TodoSlice.actions;

  // action creators

export const selectDraftList = (state) => state.draft.draftList;
export const selectInputChange = (state) => state.draft.input;
export const selectStyle = (state) => state.draft.style;

export default TodoSlice.reducer;

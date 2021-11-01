import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  draftList: [],
  input: [{item: ''}],
};

const TodoSlice = createSlice({
  name: "draftBox",
  initialState,
  reducers: {
    saveDraft: (state, action) => {
      state.draftList.push(action.payload);
    },
    deleteDraft: (state, action) => {
        state.input.pop(action.payload);
    },
    inputChange: (state, action) => {
      state.input.push(action.payload);
    },
    newTweet : (state, action) => {
      state.input.push(action.payload);
    }
  }
});

export const { saveDraft, deleteDraft, inputChange, newTweet} = TodoSlice.actions;

export const selectDraftList = (state) => state.draft.draftList;
export const selectInputChange = (state) => state.draft.input;

export default TodoSlice.reducer;

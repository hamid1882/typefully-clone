import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  draftList: [],
  text: ["\n\n\nNewTweet"],
};

const TodoSlice = createSlice({
  name: "draftBox",
  initialState,
  reducers: {
    saveDraft: (state, action) => {
      state.draftList.push(action.payload);
    },
    deleteDraft: (state, action) => {
      // eslint-disable-next-line
      state.draftList.pop()
    },
  },
});

export const { saveDraft, deleteDraft } = TodoSlice.actions;

export const selectDraftList = (state) => state.drafts.draftList;
export const deleteDraftList = (state) => state.drafts.draftList;

export default TodoSlice.reducer;

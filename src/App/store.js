import { configureStore } from '@reduxjs/toolkit';
import draftReducer from '../Features/TodoSlice'

export const store = configureStore({
  reducer:{
    drafts: draftReducer
  }
});

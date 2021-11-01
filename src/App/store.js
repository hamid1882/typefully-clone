import { configureStore } from '@reduxjs/toolkit';
import draft from '../Features/TodoSlice'

export const store = configureStore({
  reducer:{
    draft
  }
});

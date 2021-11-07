import { configureStore } from '@reduxjs/toolkit';
import draft from '../Features/InputSlice'

export const store = configureStore({
  reducer: {
    draft,
  }
});


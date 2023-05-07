import { configureStore } from '@reduxjs/toolkit';
import { usernameReducer } from './username-slice';

export const store = configureStore({
  reducer: {
    name: usernameReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
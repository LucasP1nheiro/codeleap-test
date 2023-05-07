import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UsernameState {
  value: string;
}

const initialState: UsernameState = {
  value: ''
};

export const usernameSlice = createSlice({
  name: 'username',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    }
  }
});

export const { setName } = usernameSlice.actions;

export const usernameReducer = usernameSlice.reducer;
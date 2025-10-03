import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  vibration: false,
  sensitivity: 34,
};

const slice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    toggleVibration: (state) => {
      state.vibration = !state.vibration;
    },
    setSensitivity: (state, action: PayloadAction<number>) => {
      state.sensitivity = action.payload;
    },
  },
});

export const { toggleVibration, setSensitivity } = slice.actions;

export const settingsReducer = slice.reducer;

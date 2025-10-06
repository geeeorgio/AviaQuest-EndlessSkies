import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

const DEFAULT_SETTINGS = {
  vibration: false,
  sensitivity: 34,
};

const initialState = DEFAULT_SETTINGS;

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
    resetSettings: () => {
      return DEFAULT_SETTINGS;
    },
  },
});

export const { toggleVibration, setSensitivity, resetSettings } = slice.actions;

export const settingsReducer = slice.reducer;

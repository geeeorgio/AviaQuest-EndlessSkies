import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
};

const slice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setIsLoading: (state) => {
      state.isLoading = true;
    },
    setLoadingOff: (state) => {
      state.isLoading = false;
    },
  },
});

export const { setIsLoading, setLoadingOff } = slice.actions;

export const loadingReducer = slice.reducer;

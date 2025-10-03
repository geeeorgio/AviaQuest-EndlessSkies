import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOnboardingCompleted: false,
};

const slice = createSlice({
  name: 'onboarding',
  initialState,
  reducers: {
    completeOnboarding: (state) => {
      state.isOnboardingCompleted = true;
    },
  },
});

export const { completeOnboarding } = slice.actions;

export const onboardingReducer = slice.reducer;

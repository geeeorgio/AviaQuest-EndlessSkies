import type { RootState } from 'src/redux/store';

export const selectOnbpardingDone = (state: RootState) =>
  state.onboarding.isOnboardingCompleted;

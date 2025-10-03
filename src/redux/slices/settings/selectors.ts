import type { RootState } from 'src/redux/store';

export const selectVibration = (state: RootState) => state.settings.vibration;
export const selectSensitivity = (state: RootState) =>
  state.settings.sensitivity;

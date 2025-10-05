import { Vibration } from 'react-native';

export const DURATION = {
  ON: 100,
  COLLISION: 400,
  CRITICAL: 700,
};

export type VibrationType = 'on' | 'collision' | 'critical';

export const triggerVibration = (eventType: VibrationType) => {
  switch (eventType) {
    case 'on':
      Vibration.vibrate(DURATION.ON);
      break;

    case 'collision':
      Vibration.vibrate(DURATION.COLLISION);
      break;

    case 'critical':
      Vibration.vibrate(DURATION.CRITICAL);
      break;

    default:
      break;
  }
};

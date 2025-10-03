import { Share } from 'react-native';

import { getRandomMessage } from './getRandomMessage';

import { GAME_TITLE } from 'src/constants/gameTitle';
import { GAME_URL } from 'src/constants/gameURL';

export const handleShare = async (
  collectedRings: number,
  vehicleName: string,
  title = GAME_TITLE,
): Promise<void> => {
  try {
    const message = getRandomMessage(collectedRings, vehicleName);

    const result = await Share.share({
      message,
      url: GAME_URL,
      title,
    });

    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        console.log('Shared with', result.activityType);
      } else {
        console.log('Shared!');
      }
    } else if (result.action === Share.dismissedAction) {
      console.log('Closed share window');
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error(error);
    }
  }
};

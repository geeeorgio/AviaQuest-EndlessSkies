import { OBSTACKLES } from 'src/constants';
import type { GameOverReason } from 'src/types/player/player';

export const getReasonContent = (r: GameOverReason) => {
  switch (r) {
    case 'Collision':
      return {
        text: 'YOU CAUGHT AN OBSTACLE!',
      };
    case 'FuelOut':
      return {
        text: 'OUT OF FUEL',
        icon: OBSTACKLES.FuelCan,
      };
    case 'Boundary':
      return {
        text: 'LOST CONTROL',
      };
    default:
      return {
        text: 'GAME OVER',
      };
  }
};

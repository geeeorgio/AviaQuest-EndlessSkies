import type { ObstacleType } from 'src/types/game/obcstacles';

export const OBSTACKLES = {
  Bird: require('../assets/images/gameItems/bird.png'),
  Drone: require('../assets/images/gameItems/drone.png'),
  FuelCan: require('../assets/images/gameItems/fuel.png'),
  Ring: require('../assets/images/gameItems/ring.png'),
  Onboarding: require('../assets/images/gameItems/OBSTACLE_SCENE_3.png'),
};

export const MAX_OBSTACLE_LIMITS: Record<ObstacleType, number> = {
  Bird: 10,
  Drone: 10,
  Ring: 20,
  FuelCan: 10,
};

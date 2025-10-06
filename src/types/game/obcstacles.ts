import type { ImageSourcePropType } from 'react-native';

export type ObstacleType = 'Bird' | 'Drone' | 'FuelCan' | 'Ring';

export interface ObstacleData {
  id: number;
  type: ObstacleType;
  x: number;
  y: number;
  source: ImageSourcePropType;
  size: { width: number; height: number };
}

export type SpawnedObstacle = {
  id: number;
  type: 'Bird' | 'Drone' | 'FuelCan' | 'Ring';
  y: number;
  width: number;
  height: number;
  source: any;
};

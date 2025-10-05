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

import type { VehicleId } from '../game/vehicles';

export type GameOverReason = 'None' | 'Collision' | 'FuelOut' | 'Boundary';

export interface GamePlayState {
  isPlaying: boolean;
  isPaused: boolean;
  isOver: boolean;
  fuel: number;
  sessionRings: number;
  gameOverReason: GameOverReason;
  gameKey: number;
  distance: number;
}

export interface PlayerState {
  isGameMode: boolean;
  purchasedVehiclesIdList: VehicleId[];
  selectedVehicleId: VehicleId;
  totalRings: number;
  gamePlay: GamePlayState;
  maxDistance: number;
}

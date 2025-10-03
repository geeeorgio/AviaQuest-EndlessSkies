import type { VehicleId } from '../game/vehicles';

export interface GamePlayState {
  isPlaying: boolean;
  isPaused: boolean;
  isOver: boolean;
  fuel: number;
  sessionRings: number;
}

export interface PlayerState {
  isGameMode: boolean;
  purchasedVehiclesIdList: VehicleId[];
  selectedVehicleId: VehicleId;
  totalRings: number;
  gamePlay: GamePlayState;
}

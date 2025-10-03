import type { RootState } from 'src/redux/store';
import type { VehicleId } from 'src/types/game/vehicles';

export const selectIsGameMode = (state: RootState) => state.player.isGameMode;

export const selectIsPlaying = (state: RootState) =>
  state.player.gamePlay.isPlaying;

export const selectTotalRings = (state: RootState) => state.player.totalRings;
export const selectSessionRings = (state: RootState) =>
  state.player.gamePlay.sessionRings;

export const selectPurchasedVehicleIds = (state: RootState) =>
  state.player.purchasedVehiclesIdList;
export const selectSelectedVehicleId = (state: RootState) =>
  state.player.selectedVehicleId;
export const selectIsVehiclePurchased =
  (vehicleId: VehicleId) => (state: RootState) =>
    state.player.purchasedVehiclesIdList.includes(vehicleId);

export const selectIsGamePaused = (state: RootState) =>
  state.player.gamePlay.isPaused;
export const selectIsGameOver = (state: RootState) =>
  state.player.gamePlay.isOver;
export const selectFuel = (state: RootState) => state.player.gamePlay.fuel;

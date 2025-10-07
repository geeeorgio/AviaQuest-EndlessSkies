import { createSelector } from '@reduxjs/toolkit';

import { VEHICLES } from 'src/constants';
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

export const selectSelectedVehicleId =
  (vehicleId: VehicleId) => (state: RootState) =>
    state.player.selectedVehicleId === vehicleId;

export const selectVehicleIsSeclected = (state: RootState) =>
  state.player.selectedVehicleId.length > 0;

export const selectCurrentVehicle = createSelector(
  [(state: RootState) => state.player.selectedVehicleId],
  (selectedId) => VEHICLES.find((vehicle) => selectedId === vehicle.id),
);
export const selectIsVehiclePurchased =
  (vehicleId: VehicleId) => (state: RootState) =>
    state.player.purchasedVehiclesIdList.includes(vehicleId);

export const selectInventoryListOfVehicles = createSelector(
  [selectPurchasedVehicleIds],
  (purchasedIds) => {
    return purchasedIds
      .map((id) => VEHICLES.find((v) => v.id === id))
      .filter((vehicle) => vehicle !== undefined);
  },
);

export const selectIsGamePaused = (state: RootState) =>
  state.player.gamePlay.isPaused;
export const selectIsGameOver = (state: RootState) =>
  state.player.gamePlay.isOver;
export const selectFuel = (state: RootState) => state.player.gamePlay.fuel;

export const selectGameOverReason = (state: RootState) =>
  state.player.gamePlay.gameOverReason;
export const selectGameKey = (state: RootState) =>
  state.player.gamePlay.gameKey;

export const selectSessionDistance = (state: RootState) =>
  state.player.gamePlay.distance;

export const selectMaxDistance = (state: RootState) => state.player.maxDistance;

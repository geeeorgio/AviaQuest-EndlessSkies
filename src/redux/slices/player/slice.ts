import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { VEHICLES } from 'src/constants';
import { MAX_FUEL } from 'src/constants/gameplay';
import type { VehicleId } from 'src/types/game/vehicles';
import type { GameOverReason, PlayerState } from 'src/types/player/player';

const initialState: PlayerState = {
  isGameMode: false,
  purchasedVehiclesIdList: ['plane-primary'],
  selectedVehicleId: 'plane-primary',
  totalRings: 0,
  gamePlay: {
    isPlaying: false,
    isPaused: false,
    isOver: false,
    fuel: MAX_FUEL,
    sessionRings: 0,
    gameOverReason: 'None',
    gameKey: 1,
  },
};

const slice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    exitGame: (state) => {
      state.isGameMode = false;
      state.gamePlay = {
        isPlaying: false,
        isPaused: false,
        isOver: false,
        fuel: MAX_FUEL,
        sessionRings: 0,
        gameOverReason: 'None',
        gameKey: 1,
      };
    },
    startGame: (state) => {
      state.isGameMode = true;
      state.gamePlay.isPlaying = true;
      state.gamePlay.isOver = false;
      state.gamePlay.isPaused = false;
    },
    pauseGame: (state) => {
      state.gamePlay.isPlaying = false;
      state.gamePlay.isPaused = true;
    },
    resumeGame: (state) => {
      state.gamePlay.isPlaying = true;
      state.gamePlay.isPaused = false;
    },
    gameOver: (state, action: PayloadAction<GameOverReason>) => {
      state.gamePlay.isPlaying = false;
      state.gamePlay.isOver = true;
      state.gamePlay.isPaused = false;
      state.gamePlay.gameOverReason = action.payload;
    },
    restartGame: (state) => {
      state.gamePlay = {
        isPlaying: true,
        isPaused: false,
        isOver: false,
        fuel: MAX_FUEL,
        sessionRings: 0,
        gameOverReason: 'None',
        gameKey: state.gamePlay.gameKey + 1,
      };
    },
    addRings: (state, action: PayloadAction<number>) => {
      state.totalRings += action.payload;
    },
    decreaseFuel: (state, action: PayloadAction<number>) => {
      state.gamePlay.fuel = Math.max(0, state.gamePlay.fuel - action.payload);
    },
    addFuel: (state, action: PayloadAction<number>) => {
      state.gamePlay.fuel = Math.min(
        MAX_FUEL,
        state.gamePlay.fuel + action.payload,
      );
    },
    purchaseVehicle: (state, action: PayloadAction<VehicleId>) => {
      const vehicleId = action.payload;
      const vehicle = VEHICLES.find((v) => v.id === vehicleId);

      if (
        vehicle &&
        !state.purchasedVehiclesIdList.includes(vehicleId) &&
        state.totalRings >= vehicle.price
      ) {
        state.totalRings -= vehicle.price;
        state.purchasedVehiclesIdList.push(vehicleId);
      }
    },
    selectVehicle: (state, action: PayloadAction<VehicleId>) => {
      if (state.purchasedVehiclesIdList.includes(action.payload)) {
        state.selectedVehicleId = action.payload;
      }
    },
    deleteVehicle: (state, action: PayloadAction<VehicleId>) => {
      const vehicleToDelete = action.payload;

      state.purchasedVehiclesIdList = state.purchasedVehiclesIdList.filter(
        (vehicleId) => vehicleId !== vehicleToDelete,
      );
    },
  },
});

export const {
  exitGame,
  startGame,
  pauseGame,
  resumeGame,
  gameOver,
  restartGame,
  addRings,
  decreaseFuel,
  addFuel,
  purchaseVehicle,
  selectVehicle,
  deleteVehicle,
} = slice.actions;

export const playerReducer = slice.reducer;

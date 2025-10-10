import { useCallback, useEffect } from 'react';
import {
  runOnJS,
  useFrameCallback,
  useSharedValue,
} from 'react-native-reanimated';
import type { SharedValue } from 'react-native-reanimated';

import {
  DISTANCE_INCREASE_AMOUNT,
  DISTANCE_TICK_INTERVAL_MS,
  FUEL_DECREASE_AMOUNT,
  FUEL_TICK_INTERVAL_MS,
} from 'src/constants/gameplay';
import { useAppDispatch, useAppSelector } from 'src/hooks/toolkit';
import { selectFuel } from 'src/redux/slices/player/selectors';
import {
  decreaseFuel,
  gameOver,
  incrementDistance,
} from 'src/redux/slices/player/slice';

export const useGameTicks = (
  isPlaying: SharedValue<boolean>,
  isFallingEnabled: SharedValue<boolean>,
) => {
  const dispatch = useAppDispatch();
  const fuel = useAppSelector(selectFuel);

  const lastDistanceTime = useSharedValue(Date.now());
  const lastFuelTime = useSharedValue(Date.now());

  const decreaseFuelAction = useCallback(
    () => dispatch(decreaseFuel(FUEL_DECREASE_AMOUNT)),
    [dispatch],
  );
  const tickDistanceAction = useCallback(
    () => dispatch(incrementDistance(DISTANCE_INCREASE_AMOUNT)),
    [dispatch],
  );

  const onGameOver = useCallback(() => {
    dispatch(gameOver('FuelOut'));
  }, [dispatch]);

  useEffect(() => {
    if (fuel <= 1) {
      onGameOver();
    }
  }, [fuel, onGameOver]);

  useFrameCallback(() => {
    'worklet';
    if (!isPlaying.value || !isFallingEnabled.value) return;

    const now = Date.now();

    if (now - lastDistanceTime.value > DISTANCE_TICK_INTERVAL_MS) {
      lastDistanceTime.value = now;
      runOnJS(tickDistanceAction)();
    }

    if (now - lastFuelTime.value > FUEL_TICK_INTERVAL_MS) {
      lastFuelTime.value = now;
      runOnJS(decreaseFuelAction)();
    }
  });
};

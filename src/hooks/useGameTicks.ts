import { useCallback } from 'react';
import {
  runOnJS,
  useFrameCallback,
  useSharedValue,
} from 'react-native-reanimated';
import type { SharedValue } from 'react-native-reanimated';

import {
  DISTANCE_TICK_INTERVAL_MS,
  FUEL_TICK_INTERVAL_MS,
} from 'src/constants/gameplay';
import { useAppDispatch } from 'src/hooks/toolkit';
import { decreaseFuel, incrementDistance } from 'src/redux/slices/player/slice';

export const useGameTicks = (isPlaying: SharedValue<boolean>) => {
  const dispatch = useAppDispatch();

  const lastDistanceTime = useSharedValue(Date.now());
  const lastFuelTime = useSharedValue(Date.now());

  const decreaseFuelAction = useCallback(
    () => dispatch(decreaseFuel(1)),
    [dispatch],
  );
  const tickDistanceAction = useCallback(
    () => dispatch(incrementDistance(1)),
    [dispatch],
  );

  useFrameCallback(() => {
    'worklet';
    if (!isPlaying.value) return;

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

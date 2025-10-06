import React from 'react';
import { Image } from 'react-native';
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useFrameCallback,
} from 'react-native-reanimated';
import type { SharedValue } from 'react-native-reanimated';

import { VEHICLES } from 'src/constants';
import { GRAVITY, MAX_VELOCITY, PLANE_SIZE } from 'src/constants/gameplay';
import { useAppSelector } from 'src/hooks/toolkit';
import { selectCurrentVehicle } from 'src/redux/slices/player/selectors';

type PlayerPlaneProps = {
  x: number;
  y: SharedValue<number>;
  width: number;
  height: number;
  isPressing: SharedValue<number>;
  velocity: SharedValue<number>;
  isPlaying: SharedValue<boolean>;
  screenHeight: number;
  effectiveLift: number;
  onPlaneBoundaryHit: () => void;
};

export const PlayerPlane = ({
  x,
  y,
  width,
  height,
  isPressing,
  velocity,
  isPlaying,
  screenHeight,
  effectiveLift,
  onPlaneBoundaryHit,
}: PlayerPlaneProps) => {
  const currentVehicle = useAppSelector(selectCurrentVehicle);
  const planeSource = currentVehicle?.image ?? VEHICLES[0].image;

  useFrameCallback(() => {
    'worklet';
    if (!isPlaying.value) return;

    const liftFactor = isPressing.value ? -effectiveLift : GRAVITY;

    const nextVelocity = Math.max(
      -MAX_VELOCITY,
      Math.min(MAX_VELOCITY, velocity.value + liftFactor),
    );
    velocity.value = nextVelocity;

    const floor = screenHeight - PLANE_SIZE.height;
    const tentativeY = y.value + nextVelocity;
    const nextY = Math.max(0, Math.min(floor, tentativeY));

    if (nextY >= floor) {
      runOnJS(onPlaneBoundaryHit)();
      return;
    }

    y.value = nextY;
  });

  const style = useAnimatedStyle(() => ({
    position: 'absolute',
    left: x,
    top: y.value,
    width,
    height,
  }));

  return (
    <Animated.View style={style} pointerEvents="none">
      <Image
        source={planeSource}
        style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
      />
    </Animated.View>
  );
};

export default PlayerPlane;

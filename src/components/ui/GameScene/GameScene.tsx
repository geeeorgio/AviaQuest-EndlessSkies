import React, { useEffect, useMemo, useCallback } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  useFrameCallback,
  useSharedValue,
} from 'react-native-reanimated';

import { ObstacleContainer } from './ObstacleContainer/ObstacleContainer';
import { PlayerPlane } from './PlayerPlane/PlayerPlane';
import ScrollingBackground from './ScrollingBackground/ScrollingBackground';

import { BACKGROUND_SPEED, LIFT, PLANE_SIZE } from 'src/constants/gameplay';
import { useAppDispatch, useAppSelector } from 'src/hooks/toolkit';
import { useGameTicks } from 'src/hooks/useGameTicks';
import { selectIsPlaying } from 'src/redux/slices/player/selectors';
import { gameOver } from 'src/redux/slices/player/slice';
import {
  selectSensitivity,
  selectVibration,
} from 'src/redux/slices/settings/selectors';

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window');
const CYCLE_WIDTH = SCREEN_WIDTH * 2;

const GameScene = () => {
  const dispatch = useAppDispatch();
  const sensitivity = useAppSelector(selectSensitivity);
  const vibrationEnabled = useAppSelector(selectVibration);
  const isPlayingRedux = useAppSelector(selectIsPlaying);

  const planeY = useSharedValue(SCREEN_HEIGHT * 0.5 - PLANE_SIZE.height / 2);
  const planeVelocity = useSharedValue(0);
  const isPressing = useSharedValue(0);
  const isPlaying = useSharedValue(false);
  const backgroundOffset = useSharedValue(0);

  useGameTicks(isPlaying);

  useEffect(() => {
    isPlaying.value = !!isPlayingRedux;
  }, [isPlayingRedux, isPlaying]);

  useFrameCallback(() => {
    'worklet';
    if (!isPlaying.value) return;

    const pixelsToMove = Math.round(BACKGROUND_SPEED * (100 / 60)) / 100;

    backgroundOffset.value = backgroundOffset.value - pixelsToMove;

    if (backgroundOffset.value <= -CYCLE_WIDTH) {
      backgroundOffset.value += CYCLE_WIDTH;
    }
  });

  const onPlaneBoundaryHit = useCallback(() => {
    dispatch(gameOver('Boundary'));
  }, [dispatch]);

  const pan = Gesture.Pan()
    .onBegin(() => {
      'worklet';
      isPressing.value = 1;
    })
    .onEnd(() => {
      'worklet';
      isPressing.value = 0;
    })
    .onFinalize(() => {
      'worklet';
      isPressing.value = 0;
    });

  const planeRect = useMemo(
    () => ({
      x: SCREEN_WIDTH * 0.15,
      width: PLANE_SIZE.width,
      height: PLANE_SIZE.height,
    }),
    [],
  );

  const effectiveLift = useMemo(() => {
    const sensitivityRatio = sensitivity / 100;

    const MIN_MULTIPLIER = 0.5;
    const RANGE_MULTIPLIER = 1;

    const multiplier = MIN_MULTIPLIER + sensitivityRatio * RANGE_MULTIPLIER;

    return LIFT * multiplier;
  }, [sensitivity]);

  return (
    <GestureDetector gesture={pan}>
      <Animated.View style={styles.container}>
        <ScrollingBackground backgroundX={backgroundOffset} />
        <PlayerPlane
          x={planeRect.x}
          width={PLANE_SIZE.width}
          height={PLANE_SIZE.height}
          isPressing={isPressing}
          velocity={planeVelocity}
          y={planeY}
          isPlaying={isPlaying}
          screenHeight={SCREEN_HEIGHT}
          effectiveLift={effectiveLift}
          onPlaneBoundaryHit={onPlaneBoundaryHit}
        />
        <ObstacleContainer
          screenWidth={SCREEN_WIDTH}
          screenHeight={SCREEN_HEIGHT}
          planeX={planeRect.x}
          planeY={planeY}
          planeWidth={PLANE_SIZE.width}
          planeHeight={PLANE_SIZE.height}
          vibrationEnabled={vibrationEnabled}
          isPlaying={isPlaying}
        />
      </Animated.View>
    </GestureDetector>
  );
};

export default GameScene;

const styles = StyleSheet.create({ container: { flex: 1 } });

import React, { useEffect, useMemo, useCallback } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

import { ObstacleContainer } from './ObstacleContainer/ObstacleContainer';
import { PlayerPlane } from './PlayerPlane/PlayerPlane';
import ScrollingBackground from './ScrollingBackground/ScrollingBackground';

import { BACKGROUND_SPEED, LIFT, PLANE_SIZE } from 'src/constants/gameplay';
import { useAppDispatch, useAppSelector } from 'src/hooks/toolkit';
import { selectIsPlaying } from 'src/redux/slices/player/selectors';
import { gameOver } from 'src/redux/slices/player/slice';
import {
  selectSensitivity,
  selectVibration,
} from 'src/redux/slices/settings/selectors';

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window');

const GameScene = () => {
  const dispatch = useAppDispatch();
  const sensitivity = useAppSelector(selectSensitivity);
  const vibrationEnabled = useAppSelector(selectVibration);
  const isPlayingRedux = useAppSelector(selectIsPlaying);

  const planeY = useSharedValue(SCREEN_HEIGHT * 0.5 - PLANE_SIZE.height / 2);
  const planeVelocity = useSharedValue(0);
  const isPressing = useSharedValue(0);
  const isPlaying = useSharedValue(false);
  const backgroundX = useSharedValue(0);

  useEffect(() => {
    isPlaying.value = !!isPlayingRedux;
  }, [isPlayingRedux, isPlaying]);

  useEffect(() => {
    const duration = (SCREEN_WIDTH / BACKGROUND_SPEED) * 1000;

    if (isPlayingRedux) {
      backgroundX.value = withRepeat(
        withTiming(-SCREEN_WIDTH, { duration }),
        -1,
        false,
      );
    } else {
      backgroundX.value = backgroundX.value;
    }
  }, [isPlayingRedux, backgroundX]);

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
    const mul = 0.5 + Math.min(100, Math.max(0, sensitivity)) * 0.015;
    return LIFT * mul;
  }, [sensitivity]);

  return (
    <GestureDetector gesture={pan}>
      <Animated.View style={styles.container}>
        <ScrollingBackground backgroundX={backgroundX} />
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

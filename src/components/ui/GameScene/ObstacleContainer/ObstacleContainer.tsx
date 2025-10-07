import React, { useCallback, useRef } from 'react';
import Animated, {
  Easing,
  useAnimatedReaction,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import type { SharedValue } from 'react-native-reanimated';
import { runOnJS } from 'react-native-worklets';

import { styles } from './styles';

import { OBSTACLE_SPEED } from 'src/constants/gameplay';
import { useAppDispatch } from 'src/hooks/toolkit';
import { useObstacleGeneration } from 'src/hooks/useObstacleGeneration';
import {
  addFuel,
  addSessionRings,
  gameOver,
} from 'src/redux/slices/player/slice';
import type { SpawnedObstacle } from 'src/types/game/obcstacles';
import type { GameOverReason } from 'src/types/player/player';
import { triggerVibration } from 'src/utils/vibration';

type ObstacleContainerProps = {
  screenWidth: number;
  screenHeight: number;
  planeX: number;
  planeY: SharedValue<number>;
  planeWidth: number;
  planeHeight: number;
  vibrationEnabled: boolean;
  isPlaying: SharedValue<boolean>;
};

export const ObstacleContainer = ({
  screenWidth,
  screenHeight,
  planeX,
  planeY,
  planeWidth,
  planeHeight,
  vibrationEnabled,
  isPlaying,
}: ObstacleContainerProps) => {
  const dispatch = useAppDispatch();

  const onAddRings = useCallback(
    (amount: number) => {
      dispatch(addSessionRings(amount));
    },
    [dispatch],
  );

  const onAddFuel = useCallback(
    (amount: number) => {
      dispatch(addFuel(amount));
    },
    [dispatch],
  );
  const onGameOver = useCallback(
    (reason: GameOverReason) => {
      dispatch(gameOver(reason));
    },
    [dispatch],
  );

  const { obstacles, removeObstacleById } = useObstacleGeneration({
    screenWidth,
    screenHeight,
    isPlaying,
  });

  return (
    <Animated.View style={styles.container} pointerEvents="none">
      {obstacles.map((o) => (
        <AnimatedObstacle
          key={o.id}
          o={o}
          screenWidth={screenWidth}
          planeX={planeX}
          planeY={planeY}
          planeWidth={planeWidth}
          planeHeight={planeHeight}
          vibrationEnabled={vibrationEnabled}
          isPlaying={isPlaying}
          onGameOver={onGameOver}
          onDone={removeObstacleById}
          onPickup={(picked: SpawnedObstacle) => {
            if (picked.type === 'Ring') onAddRings(1);
            if (picked.type === 'FuelCan') onAddFuel(5);
          }}
        />
      ))}
    </Animated.View>
  );
};

const AnimatedObstacle: React.FC<{
  o: SpawnedObstacle;
  screenWidth: number;
  planeX: number;
  planeY: SharedValue<number>;
  planeWidth: number;
  planeHeight: number;
  vibrationEnabled: boolean;
  isPlaying: SharedValue<boolean>;
  onGameOver: (reason: GameOverReason) => void;
  onDone: (id: number) => void;
  onPickup: (o: SpawnedObstacle) => void;
}> = ({
  o,
  screenWidth,
  planeX,
  planeY,
  planeWidth,
  planeHeight,
  vibrationEnabled,
  isPlaying,
  onGameOver,
  onDone,
  onPickup,
}) => {
  const x = useSharedValue(screenWidth + 10);
  const isHit = useSharedValue(false);
  const animationStarted = useSharedValue(false);
  const currentDuration = useRef(0);
  const lastTime = useRef(0);

  const runObstacleAnimation = (
    currentX: number,
    remainingDuration?: number,
  ) => {
    'worklet';
    const distance = currentX + o.width + 40;

    const duration = remainingDuration ?? distance * (400 / OBSTACLE_SPEED);
    currentDuration.current = duration;

    x.value = withTiming(
      -o.width - 40,
      {
        duration,
        easing: Easing.linear,
      },
      (finished) => {
        'worklet';
        if (finished) runOnJS(onDone)(o.id);
      },
    );
    lastTime.current = Date.now();
  };

  useAnimatedReaction(
    () => isPlaying.value,
    (current, prev) => {
      'worklet';
      if (current === prev) return;

      if (current) {
        if (!animationStarted.value) {
          runObstacleAnimation(screenWidth + 10);
          animationStarted.value = true;
        } else {
          const timeElapsed = Date.now() - lastTime.current;
          const remainingDuration = currentDuration.current - timeElapsed;

          if (remainingDuration > 0) {
            runObstacleAnimation(x.value, remainingDuration);
          } else {
            runOnJS(onDone)(o.id);
          }
        }
      } else {
        x.value = x.value;
        lastTime.current = Date.now();
      }
    },
    [x, o.width, onDone, o.id, isPlaying, screenWidth],
  );

  useAnimatedReaction(
    () => {
      const ax1 = planeX;
      const ay1 = planeY.value;
      const ax2 = ax1 + planeWidth;
      const ay2 = ay1 + planeHeight;
      const bx1 = x.value;
      const by1 = o.y;
      const bx2 = bx1 + o.width;
      const by2 = by1 + o.height;

      return ax1 < bx2 && ax2 > bx1 && ay1 < by2 && ay2 > by1;
    },

    (hit) => {
      'worklet';
      if (!isPlaying.value) return;
      if (!hit) return;
      if (isHit.value) return;
      isHit.value = true;
      x.value = x.value;

      if (o.type === 'Bird' || o.type === 'Drone') {
        if (vibrationEnabled) runOnJS(triggerVibration)('collision');

        runOnJS(onGameOver)('Collision');
        runOnJS(onDone)(o.id);
      } else {
        runOnJS(onPickup)(o);
        runOnJS(onDone)(o.id);
      }
    },

    [planeX, planeY, planeWidth, planeHeight, isPlaying],
  );

  const style = useAnimatedStyle(() => ({
    position: 'absolute',
    left: x.value,
    top: o.y,
    width: o.width,
    height: o.height,
  }));

  return (
    <Animated.Image source={o.source} style={style} resizeMode="contain" />
  );
};

export default ObstacleContainer;

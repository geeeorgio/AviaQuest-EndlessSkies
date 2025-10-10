import React, { useCallback, useRef, useState } from 'react';
import Animated, {
  Easing,
  useAnimatedReaction,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import type { SharedValue } from 'react-native-reanimated';
import { runOnJS } from 'react-native-worklets';

import { RingScorePopup } from '../RingScorePopup/RingScorePopup';

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

type ScorePopup = {
  id: number;
  x: number;
  y: number;
};

type ObstacleContainerProps = {
  screenWidth: number;
  screenHeight: number;
  planeX: number;
  planeY: SharedValue<number>;
  planeWidth: number;
  planeHeight: number;
  vibrationEnabled: boolean;
  isPlaying: SharedValue<boolean>;
  isFallingEnabled: SharedValue<boolean>;
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
  isFallingEnabled,
}: ObstacleContainerProps) => {
  const dispatch = useAppDispatch();
  const [scorePopups, setScorePopups] = useState<ScorePopup[]>([]);
  const popupIdRef = useRef(0);

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

  const spawnRingScorePopup = useCallback(
    (x: number, y: number) => {
      const newPopup: ScorePopup = {
        id: popupIdRef.current++,

        x: x + planeWidth / 2 - 10,

        y: y,
      };
      setScorePopups((prev) => [...prev, newPopup]);
    },
    [planeWidth],
  );

  const removeScorePopup = useCallback((id: number) => {
    setScorePopups((prev) => prev.filter((p) => p.id !== id));
  }, []);

  const handlePickup = useCallback(
    (picked: SpawnedObstacle, currentPlaneY: number) => {
      if (picked.type === 'Ring') {
        onAddRings(1);
        spawnRingScorePopup(planeX, currentPlaneY);
      }
      if (picked.type === 'FuelCan') onAddFuel(5);
    },
    [onAddRings, onAddFuel, spawnRingScorePopup, planeX],
  );

  const { obstacles, removeObstacleById } = useObstacleGeneration({
    screenWidth,
    screenHeight,
    isPlaying,
    isFallingEnabled,
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
          onPickup={handlePickup}
          isFallingEnabled={isFallingEnabled}
        />
      ))}

      {scorePopups.map((p) => (
        <RingScorePopup
          key={p.id}
          x={p.x}
          y={p.y}
          onAnimationEnd={() => removeScorePopup(p.id)}
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
  onPickup: (o: SpawnedObstacle, planeYValue: number) => void;
  isFallingEnabled: SharedValue<boolean>;
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
  isFallingEnabled,
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
    if (!isFallingEnabled.value) return;

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
    () => ({ isPlaying: isPlaying.value, isFalling: isFallingEnabled.value }),
    (current, prev) => {
      'worklet';
      if (
        current.isPlaying === prev?.isPlaying &&
        current.isFalling === prev?.isFalling
      ) {
        return;
      }

      if (isHit.value) return;

      if (current.isPlaying && current.isFalling) {
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
    [x, o.width, onDone, o.id, isPlaying, isFallingEnabled, screenWidth],
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
      if (!isPlaying.value || !isFallingEnabled.value) return;
      if (!hit) return;

      if (isHit.value) return;
      isHit.value = true;
      x.value = x.value;

      if (o.type === 'Bird' || o.type === 'Drone') {
        if (vibrationEnabled) runOnJS(triggerVibration)('collision');
        runOnJS(onGameOver)('Collision');
        runOnJS(onDone)(o.id);
      } else {
        runOnJS(onPickup)(o, planeY.value);
        runOnJS(onDone)(o.id);
      }
    },
    [
      planeX,
      planeY,
      planeWidth,
      planeHeight,
      isPlaying,
      vibrationEnabled,
      o.type,
      o.id,
      onGameOver,
      onDone,
      onPickup,
      isFallingEnabled,
    ],
  );

  const style = useAnimatedStyle(() => ({
    position: 'absolute',
    left: x.value,
    top: o.y,
    width: o.width,
    height: o.height,
    opacity: isHit.value
      ? withTiming(0, { duration: 150 })
      : withTiming(1, { duration: 150 }),
    transform: [
      {
        scale: isHit.value
          ? withTiming(0.1, { duration: 150 })
          : withTiming(1, { duration: 150 }),
      },
    ],
  }));

  return (
    <Animated.Image source={o.source} style={style} resizeMode="contain" />
  );
};

export default ObstacleContainer;

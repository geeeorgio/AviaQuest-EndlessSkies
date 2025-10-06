import React, { useCallback, useMemo, useRef, useState } from 'react';
import Animated, {
  runOnJS,
  useAnimatedReaction,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import type { SharedValue } from 'react-native-reanimated';

import { styles } from './styles';

import {
  OBSTACKLES_SIZES,
  OBSTACLE_INTERVAL,
  OBSTACLE_SPEED,
} from 'src/constants/gameplay';
import { MAX_OBSTACLE_LIMITS, OBSTACKLES } from 'src/constants/obstackleItems';
import { useAppDispatch } from 'src/hooks/toolkit';
import { addFuel, addRings, gameOver } from 'src/redux/slices/player/slice';
import type { ObstacleType, SpawnedObstacle } from 'src/types/game/obcstacles';
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
      dispatch(addRings(amount));
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

  const [obstacles, setObstacles] = useState<SpawnedObstacle[]>([]);

  const idRef = useRef(1);

  const sizes = useMemo(() => OBSTACKLES_SIZES, []);

  const spawnObstacle = () => {
    const availableTypes: ObstacleType[] = ['Bird', 'Drone', 'FuelCan', 'Ring'];

    const currentCounts: Record<ObstacleType, number> = {
      Bird: 0,
      Drone: 0,
      Ring: 0,
      FuelCan: 0,
    };

    obstacles.forEach((o) => {
      currentCounts[o.type] = (currentCounts[o.type] || 0) + 1;
    });

    const allowedTypes = availableTypes.filter(
      (type) => currentCounts[type] < MAX_OBSTACLE_LIMITS[type],
    );

    if (allowedTypes.length === 0) {
      return;
    }

    const type = allowedTypes[Math.floor(Math.random() * allowedTypes.length)];

    const s = sizes[type];
    const y = Math.max(
      0,
      Math.min(
        screenHeight - s.height,
        Math.random() * (screenHeight - s.height),
      ),
    );

    const next: SpawnedObstacle = {
      id: idRef.current++,
      type,
      y,
      width: s.width,
      height: s.height,
      source: (OBSTACKLES as any)[type],
    };

    setObstacles((prev) => [...prev, next]);
  };

  const removeObstacleById = (id: number) => {
    setObstacles((prev) => prev.filter((o) => o.id !== id));
  };

  const ticker = useSharedValue(0);

  const lastSpawn = useSharedValue(0);

  useAnimatedReaction(
    () => ticker.value,
    () => {
      'worklet';
      if (!isPlaying.value) return;

      const now = Date.now();
      if (now - lastSpawn.value >= OBSTACLE_INTERVAL) {
        lastSpawn.value = now;
        runOnJS(spawnObstacle)();
      }

      ticker.value = withTiming(ticker.value + 1, { duration: 200 });
    },
    [isPlaying],
  );

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
          onDone={(id: number) => {
            removeObstacleById(id);
          }}
          onPickup={(picked: SpawnedObstacle) => {
            if (picked.type === 'Ring') onAddRings(1);
            if (picked.type === 'FuelCan') onAddFuel(10);
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

    x.value = withTiming(-o.width - 40, { duration }, (finished) => {
      'worklet';
      if (finished) runOnJS(onDone)(o.id);
    });
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

  useAnimatedReaction(
    () => isPlaying.value,
    (current, prev) => {
      'worklet';
      if (current === prev) return;

      if (current) {
        const timeElapsed = Date.now() - lastTime.current;
        const remainingDuration = currentDuration.current - timeElapsed;

        if (remainingDuration > 0) {
          x.value = withTiming(
            -o.width - 40,
            { duration: remainingDuration },
            (finished) => {
              'worklet';
              if (finished) runOnJS(onDone)(o.id);
            },
          );
        } else {
          runOnJS(onDone)(o.id);
        }
      } else {
        x.value = x.value;
        lastTime.current = Date.now();
      }
    },
    [x, o.width, onDone, o.id, isPlaying],
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

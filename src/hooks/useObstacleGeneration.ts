import { useCallback, useMemo, useRef, useState } from 'react';
import {
  runOnJS,
  useAnimatedReaction,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import type { SharedValue } from 'react-native-reanimated';

import {
  MIN_VERTICAL_GAP,
  OBSTACKLES_SIZES,
  OBSTACLE_INTERVAL,
  OBSTACLE_SPAWN_DELAY_MS,
  SPAWN_BATCH_SIZE,
} from 'src/constants/gameplay';
import { MAX_OBSTACLE_LIMITS, OBSTACKLES } from 'src/constants/obstackleItems';
import type { ObstacleType, SpawnedObstacle } from 'src/types/game/obcstacles';

interface UseObstacleGenerationProps {
  screenWidth: number;
  screenHeight: number;
  isPlaying: SharedValue<boolean>;
  isFallingEnabled: SharedValue<boolean>;
}

export const useObstacleGeneration = ({
  screenHeight,
  isPlaying,
  isFallingEnabled,
}: UseObstacleGenerationProps) => {
  const [obstacles, setObstacles] = useState<SpawnedObstacle[]>([]);
  const idRef = useRef(1);
  const sizes = useMemo(() => OBSTACKLES_SIZES, []);

  const lastObstacleY = useRef<number | null>(null);

  const removeObstacleById = useCallback((id: number) => {
    setObstacles((prev) => prev.filter((o) => o.id !== id));
  }, []);

  const spawnObstacle = useCallback(() => {
    const availableTypes: ObstacleType[] = [
      'Bird',
      'Drone',
      'FuelCan',
      'FuelCan',
      'Ring',
      'Ring',
      'Ring',
    ];

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

    const maxHeight = screenHeight - s.height;

    let safeMinY = 0;
    let safeMaxY = maxHeight;

    if (lastObstacleY.current !== null) {
      const desiredMin = lastObstacleY.current + s.height + MIN_VERTICAL_GAP;
      const desiredMax = lastObstacleY.current - MIN_VERTICAL_GAP;

      if (lastObstacleY.current < screenHeight / 2) {
        safeMinY = Math.min(desiredMin, maxHeight);
        safeMaxY = maxHeight;
      } else {
        safeMinY = 0;
        safeMaxY = Math.max(0, desiredMax);
      }

      if (safeMaxY <= safeMinY) {
        safeMinY = 0;
        safeMaxY = maxHeight;
      }
    }

    const y = Math.max(
      safeMinY,
      Math.min(safeMaxY, safeMinY + Math.random() * (safeMaxY - safeMinY)),
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

    lastObstacleY.current = y;
  }, [obstacles, screenHeight, sizes]);

  const spawnObstacleBatch = useCallback(() => {
    for (let i = 0; i < SPAWN_BATCH_SIZE; i++) {
      if (!isFallingEnabled.value) return;

      setTimeout(() => {
        spawnObstacle();
      }, i * OBSTACLE_SPAWN_DELAY_MS);
    }
  }, [spawnObstacle, isFallingEnabled]);

  const ticker = useSharedValue(0);
  const lastSpawn = useSharedValue(0);

  useAnimatedReaction(
    () => ({ isPlaying: isPlaying.value, isFalling: isFallingEnabled.value }),
    (current) => {
      'worklet';
      if (!current.isPlaying || !current.isFalling) return;

      const now = Date.now();
      if (now - lastSpawn.value >= OBSTACLE_INTERVAL) {
        lastSpawn.value = now;
        runOnJS(spawnObstacleBatch)();
      }

      ticker.value = withTiming(ticker.value + 1, { duration: 200 });
    },
    [isPlaying, isFallingEnabled, spawnObstacleBatch],
  );

  return { obstacles, removeObstacleById };
};

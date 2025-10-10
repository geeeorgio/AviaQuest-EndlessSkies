import React, { useEffect } from 'react';
import type { TextStyle } from 'react-native';
import { StyleSheet, Text } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  Easing,
  runOnJS,
} from 'react-native-reanimated';

import { COLORS, FONTS } from 'src/constants';
import { sp } from 'src/utils/scaling';

const ANIMATION_DURATION = 800;
const FINAL_OFFSET = -50;

type RingScorePopupProps = {
  x: number;
  y: number;
  onAnimationEnd: () => void;
  textStyle?: TextStyle;
};

export const RingScorePopup = ({
  x,
  y,
  onAnimationEnd,
  textStyle,
}: RingScorePopupProps) => {
  const offsetY = useSharedValue(0);
  const opacity = useSharedValue(1);

  useEffect(() => {
    offsetY.value = withTiming(
      FINAL_OFFSET,
      {
        duration: ANIMATION_DURATION,
        easing: Easing.out(Easing.ease),
      },
      (finished) => {
        'worklet';

        if (finished) {
          opacity.value = withTiming(
            0,
            { duration: ANIMATION_DURATION / 2 },
            (finishedFade) => {
              'worklet';
              if (finishedFade) {
                runOnJS(onAnimationEnd)();
              }
            },
          );
        }
      },
    );
  }, [offsetY, opacity, onAnimationEnd]);

  const animatedStyle = useAnimatedStyle(() => ({
    position: 'absolute',
    left: x,
    top: y,
    transform: [{ translateY: offsetY.value }],
    opacity: opacity.value,
  }));

  return (
    <Animated.View style={animatedStyle} pointerEvents="none">
      <Text style={[styles.text, textStyle]}>+1</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: sp(24),
    fontFamily: FONTS.Main,
    color: COLORS.FuelLow,
  },
});

import React from 'react';
import { View, Image, Dimensions } from 'react-native';
import type { SharedValue } from 'react-native-reanimated';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';

import { styles } from './styles';

import {
  GAME_BACKGROUND_MIRRORED,
  GAME_BACKGROUND_ORIGINAL,
} from 'src/constants/bacground';

const { width } = Dimensions.get('window');
const SCROLLING_CONTAINER_WIDTH = width * 4;

interface ScrollingBackgroundProps {
  backgroundX: SharedValue<number>;
}

const ScrollingBackground = ({ backgroundX }: ScrollingBackgroundProps) => {
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: backgroundX.value }],
  }));

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.backgroundWrapper,
          animatedStyle,
          { width: SCROLLING_CONTAINER_WIDTH },
        ]}
      >
        <Image
          source={GAME_BACKGROUND_ORIGINAL}
          style={[styles.image, { width }]}
          resizeMode="cover"
        />

        <Image
          source={GAME_BACKGROUND_MIRRORED}
          style={[styles.image, { width }]}
          resizeMode="cover"
        />
        <Image
          source={GAME_BACKGROUND_ORIGINAL}
          style={[styles.image, { width }]}
          resizeMode="cover"
        />

        <Image
          source={GAME_BACKGROUND_MIRRORED}
          style={[styles.image, { width }]}
          resizeMode="cover"
        />
      </Animated.View>
    </View>
  );
};

export default ScrollingBackground;

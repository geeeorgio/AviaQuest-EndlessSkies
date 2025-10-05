import React from 'react';
import { View, Image, Dimensions } from 'react-native';
import type { SharedValue } from 'react-native-reanimated';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';

import { styles } from './styles';

import { GAME_BACKGROUND } from 'src/constants';

const { width } = Dimensions.get('window');

interface ScrollingBackgroundProps {
  backgroundX: SharedValue<number>;
  imageWidth: number;
}

const ScrollingBackground = ({ backgroundX }: ScrollingBackgroundProps) => {
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: backgroundX.value }],
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.backgroundWrapper, animatedStyle, { width: width * 2 }]}
      >
        <Image
          source={GAME_BACKGROUND}
          style={[styles.image, { width: width }]}
          resizeMode="repeat"
        />

        <Image
          source={GAME_BACKGROUND}
          style={[styles.image, { width: width }]}
          resizeMode="repeat"
        />
      </Animated.View>
    </View>
  );
};

export default ScrollingBackground;

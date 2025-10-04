import React, { useEffect } from 'react';
import { View, Dimensions } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  Easing,
} from 'react-native-reanimated';

import { styles } from './styles';

import { DURATION, PLANE_WIDTH } from 'src/constants/loaderConfig';

const SCREEN_WIDTH = Dimensions.get('window').width;

const Loader = () => {
  const planeX = useSharedValue(-PLANE_WIDTH);

  useEffect(() => {
    planeX.value = withRepeat(
      withTiming(SCREEN_WIDTH, {
        duration: DURATION,
        easing: Easing.linear,
      }),
      -1,
      false,
    );
  }, [planeX]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: planeX.value }],
    };
  });

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.planeWrapper,
          {
            width: SCREEN_WIDTH + PLANE_WIDTH,
          },
        ]}
      >
        <Animated.Image
          source={require('../../../assets/images/gameItems/plane.png')}
          style={[styles.plane, animatedStyle]}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

export default Loader;

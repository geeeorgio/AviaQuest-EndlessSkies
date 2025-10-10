import React, { useEffect } from 'react';
import { TouchableOpacity, View } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSequence,
  withTiming,
  withRepeat,
  Easing,
} from 'react-native-reanimated';

import CustomText from '../../CustomText/CustomText';

import { styles } from './styles';
import TapIcon from './TapIcon/TapIcon';

import { COLORS } from 'src/constants';
import { wp } from 'src/utils/scaling';

interface StartOverlayProps {
  onStartGame: () => void;
}

const StartOverlay = ({ onStartGame }: StartOverlayProps) => {
  const textScale = useSharedValue(1);
  const textOpacity = useSharedValue(1);

  const iconScale = useSharedValue(1);
  const iconOpacity = useSharedValue(1);

  useEffect(() => {
    textScale.value = withRepeat(
      withSequence(
        withTiming(1.08, { duration: 600, easing: Easing.inOut(Easing.ease) }),
        withTiming(1, { duration: 400, easing: Easing.inOut(Easing.ease) }),
      ),
      -1,
      true,
    );

    textOpacity.value = withRepeat(
      withSequence(
        withTiming(0.7, { duration: 600, easing: Easing.linear }),
        withTiming(1, { duration: 400, easing: Easing.linear }),
      ),
      -1,
      true,
    );

    iconScale.value = withRepeat(
      withSequence(
        withTiming(0.85, { duration: 150, easing: Easing.in(Easing.ease) }),

        withTiming(1, { duration: 250, easing: Easing.out(Easing.ease) }),

        withTiming(1, { duration: 600 }),
      ),
      -1,
      false,
    );

    iconOpacity.value = withRepeat(
      withSequence(
        withTiming(0.6, { duration: 150 }),
        withTiming(1, { duration: 250 }),
        withTiming(1, { duration: 600 }),
      ),
      -1,
      false,
    );
  }, [textScale, textOpacity, iconScale, iconOpacity]);

  const textAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: textScale.value }],
      opacity: textOpacity.value,
    };
  });

  const iconAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: iconScale.value }],
      opacity: iconOpacity.value,
    };
  });

  return (
    <TouchableOpacity
      style={styles.overlay}
      onPress={onStartGame}
      activeOpacity={0.9}
    >
      <View style={styles.blur}>
        <Animated.View style={[styles.titleContainer, textAnimatedStyle]}>
          <CustomText extraStyle={styles.title}>TAP TO FLY</CustomText>
        </Animated.View>

        <Animated.View style={[styles.handIcon, iconAnimatedStyle]}>
          <TapIcon width={wp(40)} height={wp(40)} fill={COLORS.White} />
        </Animated.View>
      </View>
    </TouchableOpacity>
  );
};

export default StartOverlay;

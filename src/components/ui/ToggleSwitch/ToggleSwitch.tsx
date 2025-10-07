import React from 'react';
import { View, Pressable } from 'react-native';

import CustomText from '../CustomText/CustomText';

import { styles } from './styles';

import { useAppDispatch, useAppSelector } from 'src/hooks/toolkit';
import { selectVibration } from 'src/redux/slices/settings/selectors';
import { toggleVibration } from 'src/redux/slices/settings/slice';
import { triggerVibration } from 'src/utils/vibration';

const ToggleSwitch = () => {
  const dispatch = useAppDispatch();
  const vibrationEnabled = useAppSelector(selectVibration);

  const handleVibrationOn = () => {
    dispatch(toggleVibration());
    triggerVibration('on');
  };

  const handleVibrationOff = () => {
    dispatch(toggleVibration());
  };

  return (
    <View style={styles.mainWrapper}>
      <CustomText extraStyle={styles.label}>VIBRATION:</CustomText>

      <View style={styles.switchesContainer}>
        <View style={styles.circlesWrapper}>
          <Pressable
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            style={[styles.circle, !vibrationEnabled && styles.active]}
            onPress={handleVibrationOff}
          ></Pressable>
          <CustomText extraStyle={styles.option}>OFF</CustomText>
        </View>

        <View style={styles.circlesWrapper}>
          <Pressable
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            style={[styles.circle, vibrationEnabled && styles.active]}
            onPress={handleVibrationOn}
          ></Pressable>
          <CustomText extraStyle={styles.option}>ON</CustomText>
        </View>
      </View>
    </View>
  );
};

export default ToggleSwitch;

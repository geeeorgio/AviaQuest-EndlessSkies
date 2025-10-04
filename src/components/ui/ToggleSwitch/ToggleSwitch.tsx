import React from 'react';
import { View, Pressable } from 'react-native';

import CustomText from '../CustomText/CustomText';

import { styles } from './styles';

import { useAppDispatch, useAppSelector } from 'src/hooks/toolkit';
import { selectVibration } from 'src/redux/slices/settings/selectors';
import { toggleVibration } from 'src/redux/slices/settings/slice';

const ToggleSwitch = () => {
  const dispatch = useAppDispatch();
  const vibrationEnabled = useAppSelector(selectVibration);

  return (
    <View style={styles.mainWrapper}>
      <CustomText extraStyle={styles.label}>VIBRATION:</CustomText>

      <View style={styles.circlesWrapper}>
        <Pressable
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          style={[styles.circle, !vibrationEnabled && styles.active]}
          onPress={() => dispatch(toggleVibration())}
        ></Pressable>
        <CustomText extraStyle={styles.option}>OFF</CustomText>
      </View>

      <View style={styles.circlesWrapper}>
        <Pressable
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          style={[styles.circle, vibrationEnabled && styles.active]}
          onPress={() => dispatch(toggleVibration())}
        ></Pressable>
        <CustomText extraStyle={styles.option}>ON</CustomText>
      </View>
    </View>
  );
};

export default ToggleSwitch;

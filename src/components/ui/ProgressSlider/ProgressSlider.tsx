import Slider from '@react-native-community/slider';
import React, { useState } from 'react';
import type { LayoutChangeEvent } from 'react-native';
import { useWindowDimensions, View } from 'react-native';

import CustomText from '../CustomText/CustomText';

import { styles } from './styles';

import { useAppDispatch, useAppSelector } from 'src/hooks/toolkit';
import { selectSensitivity } from 'src/redux/slices/settings/selectors';
import { setSensitivity } from 'src/redux/slices/settings/slice';

const THUMB_SIZE = 32;

const ProgressSlider = () => {
  const dispatch = useAppDispatch();
  const sensitivityLevel = useAppSelector(selectSensitivity);

  const { width: windowWidth } = useWindowDimensions();
  const [trackWidth, setTrackWidth] = useState(windowWidth * 0.9);

  const [currentValue, setCurrentValue] = useState(sensitivityLevel);

  const handleValueChange = (value: number) => {
    setCurrentValue(Math.round(value));
  };

  const handleSensitivityLevel = (value: number) => {
    dispatch(setSensitivity(Math.round(value)));
  };

  const onLayout = (e: LayoutChangeEvent) => {
    const fullContainerWidth = e.nativeEvent.layout.width;
    const compensatedWorkingWidth = fullContainerWidth - THUMB_SIZE;
    setTrackWidth(compensatedWorkingWidth);
  };

  const movementDistance = (currentValue / 100) * trackWidth;

  const finalThumbX = movementDistance + THUMB_SIZE / 2;

  const filledTrackWidth = finalThumbX;

  return (
    <View style={styles.wrapper}>
      <CustomText extraStyle={styles.label}>CONTROL SENSITIVITY:</CustomText>

      <View style={styles.trackWrapper} onLayout={onLayout}>
        <View style={[styles.filledTrack, { width: filledTrackWidth }]} />

        <View
          style={[
            styles.customThumb,
            {
              transform: [{ translateX: finalThumbX }],
            },
          ]}
        />

        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={100}
          step={1}
          value={currentValue}
          onValueChange={handleValueChange}
          onSlidingComplete={handleSensitivityLevel}
          minimumTrackTintColor={'transparent'}
          maximumTrackTintColor={'transparent'}
          thumbTintColor={'transparent'}
        />
      </View>

      <CustomText extraStyle={styles.value}>{currentValue}%</CustomText>
    </View>
  );
};

export default ProgressSlider;

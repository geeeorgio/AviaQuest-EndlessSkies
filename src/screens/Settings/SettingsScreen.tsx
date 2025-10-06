import React from 'react';

import { styles } from './styles';

import {
  CustomButton,
  CustomContainer,
  CustomText,
  ProgressSlider,
  ScreenWrapper,
  ToggleSwitch,
} from 'src/components';
import { useAppDispatch } from 'src/hooks/toolkit';
import { resetSettings } from 'src/redux/slices/settings/slice';

const SettingsScreen = () => {
  const dispatch = useAppDispatch();

  const handleResetSttings = () => {
    dispatch(resetSettings());
  };

  return (
    <ScreenWrapper extraStyle={styles.container}>
      <CustomContainer extraStyle={styles.section}>
        <ToggleSwitch />
      </CustomContainer>

      <CustomContainer extraStyle={styles.section}>
        <ProgressSlider />
      </CustomContainer>

      <CustomButton
        handlePress={handleResetSttings}
        variant="secondary"
        fullWidth
        extraStyle={styles.resetBtn}
      >
        <CustomText extraStyle={styles.resetText}>RESET SETTINGS</CustomText>
      </CustomButton>
    </ScreenWrapper>
  );
};

export default SettingsScreen;

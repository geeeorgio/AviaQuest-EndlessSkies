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

const SettingsScreen = () => {
  return (
    <ScreenWrapper extraStyle={styles.container}>
      <CustomContainer extraStyle={styles.section}>
        <ToggleSwitch />
      </CustomContainer>

      <CustomContainer extraStyle={styles.section}>
        <ProgressSlider />
      </CustomContainer>

      <CustomButton variant="secondary" fullWidth extraStyle={styles.resetBtn}>
        <CustomText extraStyle={styles.resetText}>RESET SETTINGS</CustomText>
      </CustomButton>
    </ScreenWrapper>
  );
};

export default SettingsScreen;

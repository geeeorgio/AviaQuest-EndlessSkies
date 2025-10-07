import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, View } from 'react-native';

import CustomButton from '../../CustomButton/CustomButton';
import CustomContainer from '../../CustomContainer/CustomContainer';
import CustomText from '../../CustomText/CustomText';

import { styles } from './styles';

import { OBSTACKLES } from 'src/constants';
import { pausePlane } from 'src/constants/vehicles';
import { useAppDispatch, useAppSelector } from 'src/hooks/toolkit';
import { selectSessionRings } from 'src/redux/slices/player/selectors';
import { resumeGame, exitGame } from 'src/redux/slices/player/slice';
import type { MainStackNavigationProp } from 'src/types/navigation/main';

const PauseModal = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<MainStackNavigationProp>();
  const sessionRings = useAppSelector(selectSessionRings);

  const handleContinue = () => {
    dispatch(resumeGame());
  };

  const handleBackHome = () => {
    dispatch(exitGame());
    navigation.navigate('HomeScreen');
  };

  const vehicleImage = pausePlane;
  const fuelCanImage = OBSTACKLES.FuelCan;

  return (
    <View style={styles.overlay}>
      <View style={styles.headerWrapper}>
        <CustomContainer extraStyle={styles.headerContainer}>
          <CustomText extraStyle={styles.headerTitle}>PAUSE</CustomText>
        </CustomContainer>

        <View style={styles.headerIconsOverlay}>
          <Image
            source={vehicleImage}
            style={styles.planeIcon}
            resizeMode="contain"
          />
          <Image
            source={fuelCanImage}
            style={styles.fuelIcon}
            resizeMode="contain"
          />
        </View>
      </View>

      <CustomContainer extraStyle={styles.modalContent}>
        <View style={styles.ringsInfo}>
          <CustomText extraStyle={styles.ringsTexts}>
            RINGS COLLECTED:
          </CustomText>

          <CustomContainer extraStyle={styles.ringsCountContainer}>
            <Image
              source={OBSTACKLES.Ring}
              style={styles.ringIcon}
              resizeMode="contain"
            />

            <CustomText extraStyle={styles.ringsValueText}>
              {sessionRings}
            </CustomText>
          </CustomContainer>
        </View>

        <View style={styles.btnContainer}>
          <CustomButton
            handlePress={handleContinue}
            extraStyle={[styles.button, styles.continueButton]}
          >
            <CustomText extraStyle={styles.buttonText}>Continue</CustomText>
          </CustomButton>

          <CustomButton
            handlePress={handleBackHome}
            extraStyle={[styles.button, styles.backHomeButton]}
          >
            <CustomText extraStyle={styles.buttonText}>Back home</CustomText>
          </CustomButton>
        </View>
      </CustomContainer>
    </View>
  );
};

export default PauseModal;

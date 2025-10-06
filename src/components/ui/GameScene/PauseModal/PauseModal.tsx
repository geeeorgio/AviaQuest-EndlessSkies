import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, View } from 'react-native';

import CustomButton from '../../CustomButton/CustomButton';
import CustomContainer from '../../CustomContainer/CustomContainer';
import CustomText from '../../CustomText/CustomText';

import { styles } from './styles';

import { OBSTACKLES, VEHICLES } from 'src/constants';
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

  const vehicleImage =
    VEHICLES.find((v) => v.id === 'plane-primary')?.image || VEHICLES[0].image;

  return (
    <View style={styles.overlay}>
      <CustomContainer extraStyle={styles.headerContainer}>
        <Image
          source={vehicleImage}
          style={styles.headerIcon}
          resizeMode="contain"
        />
        <CustomText extraStyle={styles.headerTitle}>PAUSE</CustomText>
      </CustomContainer>

      <CustomContainer extraStyle={styles.modalContent}>
        <View style={styles.ringsInfo}>
          <CustomText>RINGS COLLECTED:</CustomText>

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

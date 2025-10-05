import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';

import CustomButton from '../../CustomButton/CustomButton';
import CustomText from '../../CustomText/CustomText';

import { styles } from './styles';

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

  return (
    <View style={styles.overlay}>
      <View style={styles.modalContainer}>
        <CustomText extraStyle={styles.title}>PAUSE</CustomText>

        <View style={styles.ringsInfo}>
          <CustomText>RINGS COLLECTED:</CustomText>
          <CustomText extraStyle={styles.ringsCount}>{sessionRings}</CustomText>
        </View>

        <CustomButton handlePress={handleContinue} extraStyle={styles.button}>
          <CustomText extraStyle={styles.buttonText}>Continue</CustomText>
        </CustomButton>

        <CustomButton
          handlePress={handleBackHome}
          variant="secondary"
          extraStyle={styles.button}
        >
          <CustomText extraStyle={styles.buttonText}>Back home</CustomText>
        </CustomButton>
      </View>
    </View>
  );
};

export default PauseModal;

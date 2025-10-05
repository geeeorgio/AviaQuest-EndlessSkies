import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Image } from 'react-native';

import CustomButton from '../../CustomButton/CustomButton';
import CustomContainer from '../../CustomContainer/CustomContainer';
import CustomText from '../../CustomText/CustomText';

import { styles } from './styles';

import { OBSTACKLES } from 'src/constants';
import { useAppDispatch, useAppSelector } from 'src/hooks/toolkit';
import { selectSessionRings } from 'src/redux/slices/player/selectors';
import { restartGame, exitGame } from 'src/redux/slices/player/slice';
import type { MainStackNavigationProp } from 'src/types/navigation/main';

const GameOverModal = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<MainStackNavigationProp>();
  const finalRings = useAppSelector(selectSessionRings);

  const handleRestart = () => {
    dispatch(restartGame());
  };

  const handleGoToMenu = () => {
    dispatch(exitGame());
    navigation.navigate('HomeScreen');
  };

  return (
    <View style={styles.overlay}>
      <CustomContainer extraStyle={styles.modalContent}>
        <CustomText extraStyle={styles.title}>GAME OVER</CustomText>

        <View style={styles.scoreContainer}>
          <CustomText extraStyle={styles.scoreLabel}>
            RINGS COLLECTED:
          </CustomText>
          <CustomText extraStyle={styles.scoreValue}>{finalRings}</CustomText>
        </View>

        <View style={styles.ringsContainer}>
          <Image
            source={OBSTACKLES.Ring}
            style={styles.ringIcon}
            resizeMode="contain"
          />
          <CustomText extraStyle={styles.ringsValue}>{finalRings}</CustomText>
        </View>

        <CustomButton handlePress={handleRestart} extraStyle={styles.button}>
          <CustomText extraStyle={styles.buttonText}>RESTART</CustomText>
        </CustomButton>

        <CustomButton
          handlePress={handleGoToMenu}
          extraStyle={[styles.button, styles.menuButton]}
        >
          <CustomText extraStyle={styles.buttonText}>MAIN MENU</CustomText>
        </CustomButton>
      </CustomContainer>
    </View>
  );
};

export default GameOverModal;

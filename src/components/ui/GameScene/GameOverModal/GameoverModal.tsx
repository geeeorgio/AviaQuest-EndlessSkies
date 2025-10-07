import { CommonActions, useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Image } from 'react-native';

import CustomButton from '../../CustomButton/CustomButton';
import CustomContainer from '../../CustomContainer/CustomContainer';
import CustomText from '../../CustomText/CustomText';

import { styles } from './styles';

import { OBSTACKLES } from 'src/constants';
import { useAppDispatch, useAppSelector } from 'src/hooks/toolkit';
import {
  selectCurrentVehicle,
  selectGameOverReason,
  selectSessionRings,
} from 'src/redux/slices/player/selectors';
import { restartGame, exitGame } from 'src/redux/slices/player/slice';
import type { MainStackNavigationProp } from 'src/types/navigation/main';
import { getReasonContent } from 'src/utils/getReasonContent';
import { handleShare } from 'src/utils/hadleShare';

const GameOverModal = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<MainStackNavigationProp>();
  const finalRings = useAppSelector(selectSessionRings);
  const reason = useAppSelector(selectGameOverReason);
  const currentVehicle = useAppSelector(selectCurrentVehicle);
  const vehicleName = currentVehicle?.name || 'Default Plane';

  const content = getReasonContent(reason);

  const handleRestart = () => {
    dispatch(restartGame());
  };

  const handleGoToMenu = () => {
    dispatch(exitGame());
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'HomeScreen' }],
      }),
    );
  };

  const onShare = () => {
    handleShare(finalRings, vehicleName);
  };

  return (
    <View style={styles.overlay}>
      <CustomContainer extraStyle={styles.headerContainer}>
        <CustomText extraStyle={styles.headerTitle}>GAME OVER</CustomText>
      </CustomContainer>

      <CustomContainer extraStyle={styles.modalContent}>
        <View style={styles.reasonContainer}>
          {content.text === 'OUT OF FUEL' && (
            <Image
              source={content.icon}
              style={styles.reasonIcon}
              resizeMode="contain"
            />
          )}
          <CustomText
            extraStyle={[
              content.text === 'OUT OF FUEL' && { fontSize: 32 },
              styles.reasonText,
            ]}
          >
            {content.text}
          </CustomText>
          {content.text === 'OUT OF FUEL' && (
            <Image
              source={content.icon}
              style={styles.reasonIcon}
              resizeMode="contain"
            />
          )}
        </View>

        <View style={styles.ringsContainer}>
          <CustomText extraStyle={styles.ringsLabel}>
            RINGS COLLECTED:
          </CustomText>
          <CustomContainer extraStyle={styles.collected}>
            <Image
              source={OBSTACKLES.Ring}
              style={styles.ringIcon}
              resizeMode="contain"
            />
            <CustomText extraStyle={styles.ringsValue}>{finalRings}</CustomText>
          </CustomContainer>
        </View>

        <View style={styles.btnContainer}>
          <CustomButton handlePress={handleRestart} extraStyle={styles.button}>
            <CustomText extraStyle={styles.buttonText}>Try again</CustomText>
          </CustomButton>

          <CustomButton handlePress={handleGoToMenu} extraStyle={styles.button}>
            <CustomText extraStyle={styles.buttonText}>Back home</CustomText>
          </CustomButton>

          <CustomButton
            handlePress={onShare}
            extraStyle={[styles.button, styles.shareButton]}
          >
            <CustomText extraStyle={styles.buttonText}>Share</CustomText>
          </CustomButton>
        </View>
      </CustomContainer>
    </View>
  );
};

export default GameOverModal;

import React from 'react';
import { Image, View } from 'react-native';

import CustomButton from '../../CustomButton/CustomButton';
import CustomContainer from '../../CustomContainer/CustomContainer';
import CustomText from '../../CustomText/CustomText';

import { styles } from './styles';

import { COLORS, MAX_FUEL, OBSTACKLES } from 'src/constants';
import { useAppDispatch, useAppSelector } from 'src/hooks/toolkit';
import {
  selectFuel,
  selectSessionRings,
} from 'src/redux/slices/player/selectors';
import { pauseGame } from 'src/redux/slices/player/slice';

const HeadUpDisplay = () => {
  const dispatch = useAppDispatch();
  const sessionRings = useAppSelector(selectSessionRings);
  const currentFuel = useAppSelector(selectFuel);

  const fuelPercentage = (currentFuel / MAX_FUEL) * 100;
  let fuelColor = COLORS.FuelFull;
  if (fuelPercentage <= 50) fuelColor = COLORS.FuelMid;
  if (fuelPercentage <= 20) fuelColor = COLORS.FuelLow;

  const handlePause = () => {
    dispatch(pauseGame());
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <CustomButton
          extraStyle={styles.pauseButton}
          variant="white"
          handlePress={handlePause}
        >
          <CustomText extraStyle={styles.pauseText}>||</CustomText>
        </CustomButton>

        <CustomText extraStyle={styles.recordText}>10M</CustomText>
      </View>

      <CustomContainer extraStyle={styles.bottomBarWrapper}>
        <View style={styles.ringsCollectedLine}>
          <CustomText>RINGS COLLECTED:</CustomText>

          <CustomContainer extraStyle={styles.ringsCountContainer}>
            <Image style={styles.ringIcon} source={OBSTACKLES.Ring} />

            <CustomText extraStyle={styles.ringsCountText}>
              {sessionRings}
            </CustomText>
          </CustomContainer>
        </View>

        <View style={styles.fuelContainer}>
          <CustomText>FUEL RESERVE:</CustomText>

          <CustomContainer extraStyle={styles.fuelBarWrapper}>
            <View
              style={[
                styles.fuelBar,
                { width: `${fuelPercentage}%`, backgroundColor: fuelColor },
              ]}
            />
          </CustomContainer>
        </View>
      </CustomContainer>
    </View>
  );
};

export default HeadUpDisplay;

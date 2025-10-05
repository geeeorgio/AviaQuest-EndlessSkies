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
      <CustomContainer extraStyle={styles.topBar}>
        <CustomButton extraStyle={styles.pauseButton} handlePress={handlePause}>
          <CustomText extraStyle={styles.pauseText}>||</CustomText>
        </CustomButton>

        <CustomText extraStyle={styles.recordText}>10M</CustomText>
      </CustomContainer>

      <View style={styles.bottomBar}>
        <View style={styles.ringsCollected}>
          <CustomText>RINGS COLLECTED: </CustomText>

          <Image style={styles.ringIcon} source={OBSTACKLES.Ring} />
          <CustomText extraStyle={styles.ringsCount}>{sessionRings}</CustomText>
        </View>

        <View style={styles.fuelContainer}>
          <CustomText>FUEL RESERVE:</CustomText>
          <View style={styles.fuelBarWrapper}>
            <View
              style={[
                styles.fuelBar,
                { width: `${fuelPercentage}%`, backgroundColor: fuelColor },
              ]}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default HeadUpDisplay;

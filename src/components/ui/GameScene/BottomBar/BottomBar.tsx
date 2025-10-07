import React from 'react';
import { View, Image } from 'react-native';

import CustomContainer from '../../CustomContainer/CustomContainer';
import CustomText from '../../CustomText/CustomText';

import { styles } from './styles';

import { COLORS, MAX_FUEL, OBSTACKLES } from 'src/constants';
import { useAppSelector } from 'src/hooks/toolkit';
import {
  selectFuel,
  selectSessionRings,
} from 'src/redux/slices/player/selectors';

const BottomBar = () => {
  const sessionRings = useAppSelector(selectSessionRings);
  const currentFuel = useAppSelector(selectFuel);

  const fuelPercentage = (currentFuel / MAX_FUEL) * 100;
  let fuelColor = COLORS.FuelFull;
  if (fuelPercentage <= 50) fuelColor = COLORS.FuelMid;
  if (fuelPercentage <= 20) fuelColor = COLORS.FuelLow;

  return (
    <CustomContainer extraStyle={styles.bottomBarWrapper}>
      <View style={styles.ringsCollectedLine}>
        <CustomText extraStyle={styles.ringsCollectedText}>
          RINGS COLLECTED:
        </CustomText>

        <CustomContainer extraStyle={styles.ringsCountContainer}>
          <Image style={styles.ringIcon} source={OBSTACKLES.Ring} />
          <CustomText extraStyle={styles.ringsCountText}>
            {sessionRings}
          </CustomText>
        </CustomContainer>
      </View>

      <View style={styles.fuelContainer}>
        <CustomText extraStyle={styles.fuelText}>FUEL RESERVE:</CustomText>
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
  );
};

export default BottomBar;

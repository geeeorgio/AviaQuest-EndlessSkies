import React from 'react';
import { View, Image } from 'react-native';

import CustomContainer from '../../CustomContainer/CustomContainer';
import CustomText from '../../CustomText/CustomText';

import { styles } from './styles';

import { OBSTACKLES } from 'src/constants';
import { useAppSelector } from 'src/hooks/toolkit';
import {
  selectCurrentVehicle,
  selectTotalRings,
} from 'src/redux/slices/player/selectors';

const HomeHeader = () => {
  const currentRings = useAppSelector(selectTotalRings);

  const currentVehicle = useAppSelector(selectCurrentVehicle);

  return (
    <View style={styles.header}>
      <CustomContainer extraStyle={styles.container}>
        <Image
          source={OBSTACKLES.Ring}
          style={styles.ringIcon}
          resizeMode="contain"
        />
        <CustomText extraStyle={styles.ringText}>{currentRings}</CustomText>
      </CustomContainer>

      <CustomContainer extraStyle={styles.container}>
        <Image
          source={currentVehicle?.image}
          style={styles.miniPlane}
          resizeMode="contain"
        />
      </CustomContainer>
    </View>
  );
};

export default HomeHeader;

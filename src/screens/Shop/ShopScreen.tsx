import { useRoute } from '@react-navigation/native';
import React from 'react';
import { Image } from 'react-native';

import { styles } from './styles';

import {
  CustomContainer,
  CustomText,
  List,
  ScreenWrapper,
} from 'src/components';
import { OBSTACKLES, VEHICLES } from 'src/constants';
import { useAppDispatch, useAppSelector } from 'src/hooks/toolkit';
import { selectTotalRings } from 'src/redux/slices/player/selectors';
import type { Vehicle } from 'src/types/game/vehicles';
import type { MainScreenName } from 'src/types/navigation/main';

const ShopScreen = () => {
  const totalRings = useAppSelector(selectTotalRings);
  const dispatch = useAppDispatch();
  const route = useRoute();

  const shopVehicles = VEHICLES.filter((v) => !v.default) as Vehicle[];

  return (
    <ScreenWrapper extraStyle={styles.headerBody}>
      <CustomContainer extraStyle={styles.ringsCounter}>
        <Image
          style={styles.ring}
          resizeMode="contain"
          source={OBSTACKLES.Ring}
        />
        <CustomText extraStyle={styles.ringsText}>{totalRings}</CustomText>
      </CustomContainer>

      <List vehicles={shopVehicles} mode={route.name as MainScreenName} />
    </ScreenWrapper>
  );
};

export default ShopScreen;

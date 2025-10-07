import { useRoute } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { Alert, Image } from 'react-native';

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
import { purchaseVehicle } from 'src/redux/slices/player/slice';
import type { Vehicle, VehicleId } from 'src/types/game/vehicles';
import type { MainScreenName } from 'src/types/navigation/main';

const ShopScreen = () => {
  const totalRings = useAppSelector(selectTotalRings);
  const dispatch = useAppDispatch();
  const route = useRoute();

  const shopVehicles = VEHICLES.filter((v) => !v.default) as Vehicle[];

  const handlePurchase = useCallback(
    (vehicleId: VehicleId, price: number) => {
      if (totalRings >= price) {
        dispatch(purchaseVehicle(vehicleId));
      } else {
        Alert.alert(
          'Insufficient Rings',
          'You do not have enough rings to purchase this aircraft.',
          [{ text: 'OK' }],
        );
      }
    },
    [dispatch, totalRings],
  );

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

      <List
        vehicles={shopVehicles}
        mode={route.name as MainScreenName}
        onPurchasePress={handlePurchase}
      />
    </ScreenWrapper>
  );
};

export default ShopScreen;

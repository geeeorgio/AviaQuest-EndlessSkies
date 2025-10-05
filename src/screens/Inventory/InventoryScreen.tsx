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
import { useAppSelector } from 'src/hooks/toolkit';
import {
  selectCurrentVehicle,
  selectInventoryListOfVehicles,
} from 'src/redux/slices/player/selectors';
import type { MainScreenName } from 'src/types/navigation/main';

const InventoryScreen = () => {
  const route = useRoute();
  const vehicles = useAppSelector(selectInventoryListOfVehicles);
  const currentVehicle = useAppSelector(selectCurrentVehicle);

  return (
    <ScreenWrapper extraStyle={styles.headerBody}>
      <CustomContainer extraStyle={styles.container}>
        <Image
          style={styles.currentVehicle}
          resizeMode="contain"
          source={currentVehicle?.image}
        />
        <CustomText extraStyle={styles.text}>Selected aircraft</CustomText>
      </CustomContainer>

      {vehicles.length > 0 && (
        <List vehicles={vehicles} mode={route.name as MainScreenName} />
      )}
    </ScreenWrapper>
  );
};

export default InventoryScreen;

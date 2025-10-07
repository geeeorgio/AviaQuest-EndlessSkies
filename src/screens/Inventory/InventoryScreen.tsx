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
import { useAppDispatch, useAppSelector } from 'src/hooks/toolkit';
import {
  selectCurrentVehicle,
  selectInventoryListOfVehicles,
} from 'src/redux/slices/player/selectors';
import { deleteVehicle, selectVehicle } from 'src/redux/slices/player/slice';
import type { VehicleId } from 'src/types/game/vehicles';
import type { MainScreenName } from 'src/types/navigation/main';

const InventoryScreen = () => {
  const dispatch = useAppDispatch();
  const route = useRoute();
  const vehicles = useAppSelector(selectInventoryListOfVehicles);
  const currentVehicle = useAppSelector(selectCurrentVehicle);

  const handleSelect = useCallback(
    (vehicleId: VehicleId) => {
      dispatch(selectVehicle(vehicleId));
    },
    [dispatch],
  );

  const handleDelete = useCallback(
    (vehicleId: VehicleId) => {
      if (vehicleId === 'plane-primary') return;

      Alert.alert(
        'Confirm Deletion',
        'Are you sure you want to sell this aircraft? You will not get the rings back.',
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'Delete',
            style: 'destructive',
            onPress: () => {
              dispatch(deleteVehicle(vehicleId));
              if (currentVehicle?.id === vehicleId) {
                dispatch(selectVehicle('plane-primary'));
              }
            },
          },
        ],
      );
    },
    [dispatch, currentVehicle],
  );

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
        <List
          vehicles={vehicles}
          mode={route.name as MainScreenName}
          onChoosePress={handleSelect}
          onDeletePress={handleDelete}
        />
      )}
    </ScreenWrapper>
  );
};

export default InventoryScreen;

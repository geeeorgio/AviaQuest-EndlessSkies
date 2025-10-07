import React from 'react';
import { FlatList } from 'react-native';

import ListItem from '../ListItem/ListItem';

import { styles } from './styles';

import type { Vehicle, VehicleId } from 'src/types/game/vehicles';
import type { MainScreenName } from 'src/types/navigation/main';

interface ListProps {
  vehicles: Vehicle[];
  mode: MainScreenName;
  onPurchasePress?: (vehicleId: VehicleId, price: number) => void;
  onChoosePress?: (vehicleId: VehicleId) => void;
  onDeletePress?: (vehicleId: VehicleId) => void;
}

const List = ({
  vehicles,
  mode,
  onPurchasePress,
  onChoosePress,
  onDeletePress,
}: ListProps) => {
  return (
    <FlatList
      data={vehicles}
      renderItem={({ item }) => (
        <ListItem
          item={item}
          mode={mode}
          onExchangePress={() =>
            onPurchasePress && onPurchasePress(item.id, item.price)
          }
          onChoosePress={() => onChoosePress && onChoosePress(item.id)}
          onDeletePress={() => onDeletePress && onDeletePress(item.id)}
        />
      )}
      keyExtractor={(item) => item.id}
      style={styles.container}
    ></FlatList>
  );
};

export default List;

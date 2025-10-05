import React from 'react';
import { FlatList } from 'react-native';

import ListItem from '../ListItem/ListItem';

import { styles } from './styles';

import type { Vehicle } from 'src/types/game/vehicles';
import type { MainScreenName } from 'src/types/navigation/main';

interface ListProps {
  vehicles: Vehicle[];
  mode: MainScreenName;
}

const List = ({ vehicles, mode }: ListProps) => {
  return (
    <FlatList
      data={vehicles}
      renderItem={({ item }) => <ListItem item={item} mode={mode} />}
      keyExtractor={(item) => item.id}
      style={styles.container}
    ></FlatList>
  );
};

export default List;

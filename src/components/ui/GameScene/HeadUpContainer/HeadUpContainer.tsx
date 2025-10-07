import React from 'react';
import { View } from 'react-native';

import BottomBar from '../BottomBar/BottomBar';
import TopBar from '../TopBar/TopBar';

import { styles } from './styles';

const HeadUpContainer = () => {
  return (
    <View style={styles.container}>
      <TopBar />
      <View style={styles.bottomBarPosition}>
        <BottomBar />
      </View>
    </View>
  );
};

export default HeadUpContainer;

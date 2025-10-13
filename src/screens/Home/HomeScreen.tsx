import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';

import { HomeHeader, HomeLogo, HomeMenu, ScreenWrapper } from 'src/components';

const HomeScreen = () => {
  return (
    <ScreenWrapper>
      <View style={styles.mainContainer}>
        <HomeHeader />
        {/* <HomeLogo /> */}
        <HomeMenu />
      </View>
    </ScreenWrapper>
  );
};

export default HomeScreen;

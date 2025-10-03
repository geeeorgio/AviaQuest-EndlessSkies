import React from 'react';
import { View, Image } from 'react-native';

import { styles } from './styles';

const HomeLogo = () => (
  <View style={styles.heroArea}>
    <Image
      source={require('../../../../assets/images/background/logoTransparent.png')}
      style={styles.mainPlane}
      resizeMode="contain"
    />
  </View>
);

export default HomeLogo;

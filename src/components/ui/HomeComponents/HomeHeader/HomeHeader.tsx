import React from 'react';
import { View, Image } from 'react-native';
import { useSelector } from 'react-redux';

import CustomContainer from '../../CustomContainer/CustomContainer';
import CustomText from '../../CustomText/CustomText';

import { styles } from './styles';

import { OBSTACKLES, VEHICLES } from 'src/constants';
import { selectTotalRings } from 'src/redux/slices/player/selectors';

const HomeHeader = () => {
  const currentRings = useSelector(selectTotalRings);

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
          source={VEHICLES[0].image}
          style={styles.miniPlane}
          resizeMode="contain"
        />
      </CustomContainer>
    </View>
  );
};

export default HomeHeader;

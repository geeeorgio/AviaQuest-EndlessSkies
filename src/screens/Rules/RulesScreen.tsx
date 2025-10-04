import React from 'react';
import { Image, ScrollView, View } from 'react-native';

import { styles } from './styles';

import { CustomText, ScreenWrapper } from 'src/components';

const RulesScreen = () => {
  return (
    <ScreenWrapper>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/images/background/logoTransparent.png')}
            style={styles.mainPlane}
            resizeMode="contain"
          />
        </View>

        <View style={styles.rulesList}>
          <CustomText extraStyle={styles.ruleText}>
            TOUCH THE SCREEN TO GO UP; RELEASE TO GO DOWN.
          </CustomText>
          <CustomText extraStyle={styles.ruleText}>
            AVOID OBSTACLES: DRONES, BIRDS.
          </CustomText>
          <CustomText extraStyle={styles.ruleText}>
            COLLECT AIR RINGS - EACH GIVES +1 POINT.
          </CustomText>
          <CustomText extraStyle={styles.ruleText}>
            COLLECT FUEL TANKS - WITHOUT FUEL THE FLIGHT WILL BE TERMINATED.
          </CustomText>
          <CustomText extraStyle={styles.ruleText}>
            OFFLINE GAME, NO PAUSES OR HINTS: JUST YOU AND THE ENDLESS SKY.
          </CustomText>
          <CustomText extraStyle={styles.ruleText}>
            THE FLIGHT ENDS WHEN THE PLANE CRASHES INTO AN OBSTACLE OR RUNS OUT
            OF FUEL.
          </CustomText>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

export default RulesScreen;

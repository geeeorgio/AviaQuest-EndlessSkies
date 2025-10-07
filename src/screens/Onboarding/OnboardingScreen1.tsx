import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Dimensions, Image, View } from 'react-native';

import { styles } from './styles';

import { CustomButton, CustomContainer, CustomText } from 'src/components';
import { OBSTACKLES } from 'src/constants';
import type { OnboardingStackNavigationProp } from 'src/types/navigation/onboarding';

const OnboardingScreen1 = () => {
  const navigation = useNavigation<OnboardingStackNavigationProp>();

  const { width } = Dimensions.get('window');

  return (
    <View style={styles.container}>
      <View style={[styles.imageArea, { position: 'relative' }]}>
        <Image
          source={OBSTACKLES.FuelCan}
          style={[
            styles.fuelCanImage,
            { left: width * -0.02, width: width * 0.6, height: width * 0.6 },
          ]}
          resizeMode="contain"
        />
        <Image
          source={OBSTACKLES.Ring}
          style={[
            styles.ringImage,
            { right: width * 0.05, width: width * 0.4, height: width * 0.4 },
          ]}
          resizeMode="contain"
        />
      </View>

      <View style={styles.contentArea}>
        <View style={styles.textGroup}>
          <CustomContainer extraStyle={styles.noPadding}>
            <CustomText extraStyle={[styles.titleText, { fontSize: 22 }]}>
              Obstacles ahead
            </CustomText>
          </CustomContainer>

          <CustomContainer extraStyle={styles.noPadding}>
            <CustomText extraStyle={styles.descriptionText}>
              Avoid obstacles, collect rings and fuel tanks - let your courage
              speak for itself.
            </CustomText>
          </CustomContainer>
        </View>

        <CustomButton
          extraStyle={styles.btn}
          handlePress={() => navigation.navigate('OnboardingScreen2')}
        >
          <CustomText extraStyle={styles.buttonText}>I am ready</CustomText>
        </CustomButton>
      </View>
    </View>
  );
};

export default OnboardingScreen1;

import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, View } from 'react-native';

import { styles } from './styles';

import { CustomButton, CustomContainer, CustomText } from 'src/components';
import { VEHICLES } from 'src/constants';
import type { OnboardingStackNavigationProp } from 'src/types/navigation/onboarding';

const OnboardingScreen = () => {
  const navigation = useNavigation<OnboardingStackNavigationProp>();

  return (
    <View style={styles.container}>
      <View style={styles.imageArea}>
        <Image
          source={VEHICLES[0].image}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <View style={styles.contentArea}>
        <View style={styles.textGroup}>
          <CustomContainer extraStyle={styles.noPadding}>
            <CustomText extraStyle={styles.titleText}>FIRST TAKEOFF</CustomText>
          </CustomContainer>

          <CustomContainer extraStyle={styles.noPadding}>
            <CustomText extraStyle={styles.descriptionText}>
              Immerse yourself in the poetic flow of air - touch the screen to
              go up, let go to go down. Your journey into the endless skies
              begins here.
            </CustomText>
          </CustomContainer>
        </View>

        <CustomButton
          extraStyle={styles.btn}
          handlePress={() => navigation.navigate('OnboardingScreen1')}
        >
          <CustomText extraStyle={styles.buttonText}>Start flight</CustomText>
        </CustomButton>
      </View>
    </View>
  );
};

export default OnboardingScreen;

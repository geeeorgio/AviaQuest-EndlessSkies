import React from 'react';
import { Dimensions, Image, View } from 'react-native';
import { useDispatch } from 'react-redux';

import { styles } from './styles';

import { CustomButton, CustomContainer, CustomText } from 'src/components';
import { OBSTACKLES } from 'src/constants';
import { completeOnboarding } from 'src/redux/slices/onboarding/slice';

const OnboardingScreen2 = () => {
  const dispatch = useDispatch();

  const { width } = Dimensions.get('window');

  return (
    <View style={styles.container}>
      <View style={styles.imageArea}>
        <Image
          source={OBSTACKLES.Onboarding}
          style={[styles.onbordingObstacles, { width: width }]}
          resizeMode="contain"
        />
      </View>

      <View style={styles.contentArea}>
        <View style={styles.textGroup}>
          <CustomContainer extraStyle={styles.noPadding}>
            <CustomText extraStyle={[styles.titleText, { fontSize: 22 }]}>
              The last frontier
            </CustomText>
          </CustomContainer>

          <CustomContainer extraStyle={styles.noPadding}>
            <CustomText extraStyle={styles.descriptionText}>
              Test your own courage in this endless challenge - the game is
              always with you offline.
            </CustomText>
          </CustomContainer>
        </View>

        <CustomButton
          extraStyle={styles.btn}
          handlePress={() => dispatch(completeOnboarding())}
        >
          <CustomText extraStyle={styles.buttonText}>Lets GOOOO!</CustomText>
        </CustomButton>
      </View>
    </View>
  );
};

export default OnboardingScreen2;

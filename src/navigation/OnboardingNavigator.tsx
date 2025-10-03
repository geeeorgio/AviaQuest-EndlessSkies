import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import {
  OnboardingScreen,
  OnboardingScreen1,
  OnboardingScreen2,
} from 'src/screens';
import type { OnboardingStackParamsList } from 'src/types/navigation/onboarding';

const Onboard = createNativeStackNavigator<OnboardingStackParamsList>();

const OnboardingNavigator = () => {
  return (
    <Onboard.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: 'transparent',
        },
        gestureEnabled: false,
        animation: 'fade',
      }}
    >
      <Onboard.Screen name="OnboardingScreen" component={OnboardingScreen} />
      <Onboard.Screen name="OnboardingScreen1" component={OnboardingScreen1} />
      <Onboard.Screen name="OnboardingScreen2" component={OnboardingScreen2} />
    </Onboard.Navigator>
  );
};

export default OnboardingNavigator;

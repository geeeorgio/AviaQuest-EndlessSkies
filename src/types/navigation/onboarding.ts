import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type OnboardingStackParamsList = {
  OnboardingScreen: undefined;
  OnboardingScreen1: undefined;
  OnboardingScreen2: undefined;
};

export type OnboardingStackNavigationProp = NativeStackNavigationProp<
  OnboardingStackParamsList,
  'OnboardingScreen'
>;

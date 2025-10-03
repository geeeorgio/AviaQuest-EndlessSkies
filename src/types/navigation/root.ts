import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamsList = {
  OnboardingStack: undefined;
  MainStack: undefined;
};

export type RootStackNavigationProp = NativeStackNavigationProp<
  RootStackParamsList,
  'OnboardingStack'
>;

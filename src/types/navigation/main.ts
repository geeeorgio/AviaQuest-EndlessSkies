import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type MainStackParamsList = {
  HomeScreen: undefined;
  RulesScreen: undefined;
  SettingsScreen: undefined;
  GameScreen: undefined;
  ShopScreen: undefined;
  InventoryScreen: undefined;
};

export type MainScreenName = keyof MainStackParamsList;

export type MainStackNavigationProp = NativeStackNavigationProp<
  MainStackParamsList,
  'HomeScreen'
>;

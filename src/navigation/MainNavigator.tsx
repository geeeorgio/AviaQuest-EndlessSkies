import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import {
  GameScreen,
  HomeScreen,
  InventoryScreen,
  RulesScreen,
  SettingsScreen,
  ShopScreen,
} from 'src/screens';
import type { MainStackParamsList } from 'src/types/navigation/main';

const Main = createNativeStackNavigator<MainStackParamsList>();

const MainNavigator = () => {
  return (
    <Main.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: 'transparent',
        },
      }}
    >
      <Main.Screen name="HomeScreen" component={HomeScreen} />
      <Main.Screen name="RulesScreen" component={RulesScreen} />
      <Main.Screen name="SettingsScreen" component={SettingsScreen} />
      <Main.Screen name="GameScreen" component={GameScreen} />
      <Main.Screen name="ShopScreen" component={ShopScreen} />
      <Main.Screen name="InventoryScreen" component={InventoryScreen} />
    </Main.Navigator>
  );
};

export default MainNavigator;

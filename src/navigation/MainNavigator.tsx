import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { CustomHeader } from 'src/components';
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
        gestureEnabled: false,
        animation: 'fade',
      }}
    >
      <Main.Screen name="HomeScreen" component={HomeScreen} />
      <Main.Screen name="GameScreen" component={GameScreen} />
      <Main.Screen
        name="RulesScreen"
        component={RulesScreen}
        options={{
          headerShown: true,
          title: 'Rules',
          header: (props) => <CustomHeader {...props} />,
        }}
      />
      <Main.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          headerShown: true,
          title: 'Settings',
          header: (props) => <CustomHeader {...props} />,
        }}
      />
      <Main.Screen
        name="ShopScreen"
        component={ShopScreen}
        options={{
          headerShown: true,
          title: 'Shop',
          header: (props) => <CustomHeader {...props} />,
        }}
      />
      <Main.Screen
        name="InventoryScreen"
        component={InventoryScreen}
        options={{
          headerShown: true,
          title: 'Inventory',
          header: (props) => <CustomHeader {...props} />,
        }}
      />
    </Main.Navigator>
  );
};

export default MainNavigator;

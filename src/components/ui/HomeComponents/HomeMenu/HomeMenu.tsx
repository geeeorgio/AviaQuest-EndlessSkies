import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';

import CustomButton from '../../CustomButton/CustomButton';
import CustomText from '../../CustomText/CustomText';

import { styles } from './styles';

import { useAppDispatch } from 'src/hooks/toolkit';
import { startGame } from 'src/redux/slices/player/slice';
import type { MainStackNavigationProp } from 'src/types/navigation/main';

const HomeMenu = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<MainStackNavigationProp>();

  const handleStartGame = () => {
    dispatch(startGame());
    navigation.navigate('GameScreen');
  };

  return (
    <View style={styles.menuButtons}>
      <View style={styles.row}>
        <CustomButton
          extraStyle={[styles.btn, { flex: 1.5 }]}
          handlePress={handleStartGame}
        >
          <CustomText extraStyle={styles.buttonText}>START PLAY</CustomText>
        </CustomButton>
        <CustomButton
          extraStyle={[styles.btn, { flex: 1 }]}
          variant="secondary"
          handlePress={() => navigation.navigate('ShopScreen')}
        >
          <CustomText extraStyle={styles.buttonText}>Shop</CustomText>
        </CustomButton>
      </View>

      <View style={styles.row}>
        <CustomButton
          extraStyle={[styles.btn, { flex: 1.5 }]}
          handlePress={() => navigation.navigate('InventoryScreen')}
        >
          <CustomText extraStyle={styles.buttonText}>Inventory</CustomText>
        </CustomButton>
        <CustomButton
          extraStyle={[styles.btn, { flex: 1 }]}
          variant="secondary"
          handlePress={() => navigation.navigate('RulesScreen')}
        >
          <CustomText extraStyle={styles.buttonText}>Rules</CustomText>
        </CustomButton>
      </View>

      <CustomButton
        extraStyle={styles.btn}
        fullWidth={true}
        handlePress={() => navigation.navigate('SettingsScreen')}
      >
        <CustomText extraStyle={styles.buttonText}>SETTINGS</CustomText>
      </CustomButton>
    </View>
  );
};

export default HomeMenu;

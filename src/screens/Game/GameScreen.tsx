import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { styles } from './styles';

import {
  GameOverModal,
  GameScene,
  HeadUpDisplay,
  PauseModal,
} from 'src/components';
import { useAppDispatch, useAppSelector } from 'src/hooks/toolkit';
import {
  selectIsGameOver,
  selectIsGamePaused,
} from 'src/redux/slices/player/selectors';
import { startGame, exitGame } from 'src/redux/slices/player/slice';

const GameScreen = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  const isPaused = useAppSelector(selectIsGamePaused);
  const isGameOver = useAppSelector(selectIsGameOver);

  useEffect(() => {
    dispatch(startGame());
    const unsubscribe = navigation.addListener('beforeRemove', () => {
      dispatch(exitGame());
    });

    return unsubscribe;
  }, [dispatch, navigation]);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.gameWorld}>{!isGameOver && <GameScene />}</View>

        {!isGameOver && <HeadUpDisplay />}
        {isPaused && <PauseModal />}
        {isGameOver && <GameOverModal />}
      </View>
    </GestureHandlerRootView>
  );
};

export default GameScreen;

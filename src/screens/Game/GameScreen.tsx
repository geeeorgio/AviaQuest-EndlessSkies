import { BlurView } from '@react-native-community/blur';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { styles } from './styles';

import {
  GameOverModal,
  GameScene,
  HeadUpContainer,
  PauseModal,
  StartOverlay,
} from 'src/components';
import { useAppDispatch, useAppSelector } from 'src/hooks/toolkit';
import {
  selectGameKey,
  selectIsGameOver,
  selectIsGamePaused,
} from 'src/redux/slices/player/selectors';
import { exitGame } from 'src/redux/slices/player/slice';

const GameScreen = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const gameKey = useAppSelector(selectGameKey);

  const insets = useSafeAreaInsets();

  const isPaused = useAppSelector(selectIsGamePaused);
  const isGameOver = useAppSelector(selectIsGameOver);
  const [isFallingEnabled, setIsFallingEnabled] = useState(false);

  const isGameActive = !isPaused && !isGameOver;
  const isModalActive = isPaused || isGameOver;
  const isPreStart = isGameActive && !isFallingEnabled;

  const handleStartGame = () => {
    if (isPreStart) {
      setIsFallingEnabled(true);
    }
  };

  useEffect(() => {
    setIsFallingEnabled(false);
  }, [gameKey]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('beforeRemove', () => {
      dispatch(exitGame());
    });
    return unsubscribe;
  }, [dispatch, navigation]);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.gameWorld}>
          <GameScene key={gameKey} isFallingEnabledProp={isFallingEnabled} />

          {isModalActive && (
            <BlurView
              style={StyleSheet.absoluteFill}
              blurType="dark"
              blurAmount={5}
              reducedTransparencyFallbackColor="black"
            />
          )}
        </View>

        <View
          style={[
            styles.overlayContainer,
            {
              paddingTop: insets.top,
              paddingBottom: insets.bottom,
              paddingLeft: insets.left,
              paddingRight: insets.right,
            },
          ]}
        >
          {isGameActive && !isPreStart && <HeadUpContainer />}
          {isPaused && <PauseModal />}
          {isGameOver && <GameOverModal />}
          {isPreStart && <StartOverlay onStartGame={handleStartGame} />}
        </View>
      </View>
    </GestureHandlerRootView>
  );
};

export default GameScreen;

import type { ReactNode } from 'react';
import React from 'react';
import { ImageBackground, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Loader from '../Loader/Loader';

import { styles } from './styles';

import { MAIN_BACKGROUND } from 'src/constants';
import { useAppSelector } from 'src/hooks/toolkit';
import { selectIsLoading } from 'src/redux/slices/loadingStatus/selectors';
import { selectIsGameMode } from 'src/redux/slices/player/selectors';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const isGameMode = useAppSelector(selectIsGameMode);
  const isLoading = useAppSelector(selectIsLoading);

  const mainContent = isLoading ? <Loader /> : children;

  if (isGameMode) {
    return <View style={styles.transparentContainer}>{mainContent}</View>;
  }

  return (
    <ImageBackground
      source={MAIN_BACKGROUND}
      resizeMode="cover"
      style={styles.image}
    >
      <SafeAreaView style={styles.container}>{mainContent}</SafeAreaView>
    </ImageBackground>
  );
};

export default Layout;

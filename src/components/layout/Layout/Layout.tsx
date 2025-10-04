import type { ReactNode } from 'react';
import React from 'react';
import type { ImageSourcePropType } from 'react-native';
import { ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Loader from '../Loader/Loader';

import { styles } from './styles';

interface LayoutProps {
  children: ReactNode;
  backgroundSource: ImageSourcePropType;
  isLoading?: boolean;
}

const Layout = ({ children, backgroundSource, isLoading }: LayoutProps) => {
  return (
    <ImageBackground
      source={backgroundSource}
      resizeMode="cover"
      style={styles.image}
    >
      <SafeAreaView style={styles.container}>
        {isLoading ? <Loader /> : children}
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Layout;

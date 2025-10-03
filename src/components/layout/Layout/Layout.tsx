import type { ReactNode } from 'react';
import React from 'react';
import type { ImageSourcePropType } from 'react-native';
import { ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';

interface LayoutProps {
  children: ReactNode;
  backgroundSource: ImageSourcePropType;
}

const Layout = ({ children, backgroundSource }: LayoutProps) => {
  return (
    <ImageBackground
      source={backgroundSource}
      resizeMode="cover"
      style={styles.image}
    >
      <SafeAreaView style={styles.container}>{children}</SafeAreaView>
    </ImageBackground>
  );
};

export default Layout;

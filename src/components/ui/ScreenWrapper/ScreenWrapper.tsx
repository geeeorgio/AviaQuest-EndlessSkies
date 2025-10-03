import type { ReactNode } from 'react';
import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';

interface ScreenWrapperProps {
  children: ReactNode;
}

const ScreenWrapper = ({ children }: ScreenWrapperProps) => {
  return <View style={styles.wrapper}>{children}</View>;
};

export default ScreenWrapper;

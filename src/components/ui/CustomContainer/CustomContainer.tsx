import type { ReactNode } from 'react';
import React from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import { View } from 'react-native';

import { styles } from './styles';

interface CustomContainerProps {
  extraStyle?: StyleProp<ViewStyle>;
  children: ReactNode;
}

const CustomContainer = ({ extraStyle, children }: CustomContainerProps) => {
  return <View style={[styles.container, extraStyle]}>{children}</View>;
};

export default CustomContainer;

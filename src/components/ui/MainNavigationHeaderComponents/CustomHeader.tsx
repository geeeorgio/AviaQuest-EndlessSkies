import type { NativeStackHeaderProps } from '@react-navigation/native-stack';
import React from 'react';
import { View } from 'react-native';

import CustomButton from '../CustomButton/CustomButton';
import CustomContainer from '../CustomContainer/CustomContainer';
import CustomText from '../CustomText/CustomText';

import CustomBackArrowSvg from './CustomBackArrowSvg/CustomBackArrowSvg';
import { styles } from './styles';

import type { MainScreenName } from 'src/types/navigation/main';
import { getVariantFromRouteName } from 'src/utils/getVariantFromRouteName';

const CustomHeader = ({
  options,
  route,
  navigation,
  back,
}: NativeStackHeaderProps) => {
  const title = (options.title || route.name) as string;
  const screenName = route.name as MainScreenName;
  const variant = getVariantFromRouteName(screenName);

  return (
    <View style={styles.container}>
      {back ? (
        <CustomButton
          handlePress={navigation.goBack}
          extraStyle={styles.backButton}
          variant="white"
        >
          <CustomBackArrowSvg />
        </CustomButton>
      ) : (
        <View style={styles.emptySpace} />
      )}

      <View style={styles.titleWrapper}>
        <CustomContainer
          extraStyle={variant === 'blue' ? styles.blue : styles.red}
        >
          <CustomText extraStyle={styles.text}>{title}</CustomText>
        </CustomContainer>
      </View>

      <View style={styles.emptySpace} />
    </View>
  );
};

export default CustomHeader;

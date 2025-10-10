import React from 'react';
import { View } from 'react-native';

import CustomButton from '../../CustomButton/CustomButton';
import CustomText from '../../CustomText/CustomText';

import PauseSvgIcon from './PauseSvgIcon/PauseSvgIcon';
import { styles } from './styles';

import { useAppDispatch, useAppSelector } from 'src/hooks/toolkit';
import { selectSessionDistance } from 'src/redux/slices/player/selectors';
import { pauseGame } from 'src/redux/slices/player/slice';

const TopBar = () => {
  const dispatch = useAppDispatch();
  const record = useAppSelector(selectSessionDistance);

  const handlePause = () => {
    dispatch(pauseGame());
  };

  return (
    <View style={styles.topBar}>
      <View style={styles.sideContainer}>
        <CustomButton
          extraStyle={styles.pauseButton}
          variant="white"
          handlePress={handlePause}
        >
          <PauseSvgIcon width={30} height={30} />
        </CustomButton>
      </View>

      <View style={styles.centerContainer}>
        <CustomText extraStyle={styles.recordText}>{`${record}M`}</CustomText>
      </View>

      <View style={styles.sideContainer} />
    </View>
  );
};

export default TopBar;

import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils/scaling';

export const styles = StyleSheet.create({
  topBar: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  sideContainer: {
    width: wp(66),
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pauseButton: {
    width: wp(66),
    height: hp(66),
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: COLORS.Primary,
    alignItems: 'center',
    backgroundColor: COLORS.White,
  },
  recordText: {
    fontSize: sp(24),
    fontFamily: FONTS.NunitoExtra,
    color: COLORS.White,
  },
});

import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils/scaling';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(16),
    minHeight: hp(70),
  },
  backButton: {
    width: wp(66),
    height: hp(66),
    padding: 0,
    backgroundColor: COLORS.White,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: COLORS.Primary,
  },
  emptySpace: {
    width: wp(66),
    height: hp(66),
  },
  titleWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  blue: {
    justifyContent: 'center',
    backgroundColor: COLORS.Primary,
    borderColor: 'transparent',
    borderWidth: 0,
    paddingHorizontal: wp(25),
    paddingVertical: hp(15),
  },
  red: {
    justifyContent: 'center',
    backgroundColor: COLORS.Secondary,
    borderColor: 'transparent',
    borderWidth: 0,
    paddingHorizontal: wp(30),
    paddingVertical: hp(15),
  },
  text: {
    color: COLORS.White,
    fontSize: sp(23),
    fontFamily: FONTS.Main,
  },
});

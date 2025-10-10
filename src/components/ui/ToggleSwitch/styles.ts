import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, sp, wp } from 'src/utils/scaling';

export const styles = StyleSheet.create({
  mainWrapper: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingVertical: hp(15),
  },
  label: {
    fontSize: sp(22),
    fontFamily: FONTS.NunitoExtra,
    color: COLORS.Black,
  },
  switchesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp(5),
  },
  circlesWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp(8),
  },
  circle: {
    height: hp(29),
    width: wp(29),
    borderRadius: 16,
    borderWidth: 3,
    borderColor: COLORS.Primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  active: {
    backgroundColor: COLORS.Primary,
  },
  option: {
    fontSize: sp(13),
    fontFamily: FONTS.NunitoExtra,
    color: COLORS.Black,
  },
});

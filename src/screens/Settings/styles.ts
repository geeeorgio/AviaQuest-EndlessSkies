import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, wp, sp } from 'src/utils/scaling';

export const styles = StyleSheet.create({
  container: { marginTop: hp(70), gap: 15 },
  section: {
    width: '100%',
    paddingHorizontal: wp(15),
    paddingVertical: hp(15),
  },
  resetBtn: {
    backgroundColor: COLORS.Red,
    borderWidth: 3,
    borderColor: COLORS.Primary,
    borderRadius: 20,
    paddingVertical: hp(20),
  },
  resetText: {
    fontSize: sp(22),
    fontFamily: FONTS.NunitoExtra,
    color: COLORS.White,
    textAlign: 'center',
  },
});

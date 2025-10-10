import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';
import { hp, wp, sp } from 'src/utils/scaling';

export const styles = StyleSheet.create({
  scrollContent: {
    marginTop: hp(30),
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  logoContainer: {
    width: wp(200),
    height: hp(180),
    marginBottom: hp(30),
  },
  mainPlane: {
    width: '100%',
    height: '100%',
  },
  rulesList: {
    width: '100%',
    alignItems: 'flex-start',
    gap: 10,
  },
  ruleText: {
    fontFamily: FONTS.NunitoExtra,
    fontSize: sp(15),
    textAlign: 'left',
    textTransform: 'uppercase',
    color: COLORS.White,
  },
});

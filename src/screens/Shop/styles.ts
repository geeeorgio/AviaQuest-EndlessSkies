import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { hp, wp, sp } from 'src/utils/scaling';

export const styles = StyleSheet.create({
  headerBody: { marginTop: 15 },
  ringsCounter: {
    width: '33%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: wp(5),
    marginBottom: hp(15),
    paddingVertical: hp(12),
    paddingHorizontal: wp(12),
  },
  ring: { width: wp(33), height: hp(33) },
  ringsText: {
    fontSize: sp(14),
    color: COLORS.Black,
  },
});

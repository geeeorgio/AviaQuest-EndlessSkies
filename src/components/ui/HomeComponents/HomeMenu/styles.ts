import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { hp, sp, wp } from 'src/utils/scaling';

export const styles = StyleSheet.create({
  menuButtons: {
    gap: 15,
    marginBottom: hp(54),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: wp(15),
  },
  btn: { paddingVertical: hp(22), minWidth: 0 },
  buttonText: {
    fontSize: sp(24),
    color: COLORS.White,
  },
});

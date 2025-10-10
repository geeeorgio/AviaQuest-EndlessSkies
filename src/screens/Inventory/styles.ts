import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { hp, wp, sp } from 'src/utils/scaling';

export const styles = StyleSheet.create({
  headerBody: { marginTop: 28 },
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: hp(22),
    paddingHorizontal: wp(15),
  },
  currentVehicle: {
    maxHeight: hp(40),
    maxWidth: wp(80),
    aspectRatio: 1,
  },
  text: {
    fontSize: sp(23),
    color: COLORS.Black,
  },
});

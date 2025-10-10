import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { hp, sp, wp } from 'src/utils/scaling';

export const styles = StyleSheet.create({
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: wp(55),
    marginTop: hp(10),
    marginBottom: hp(17),
  },
  container: {
    flex: 1,
    minWidth: 0,
    flexDirection: 'row',
    gap: wp(7),
    paddingVertical: hp(15),
    paddingHorizontal: wp(15),
  },
  ringIcon: {
    width: wp(33),
    height: hp(33),
  },
  ringText: {
    textAlign: 'center',
    fontSize: sp(15),
    color: COLORS.Black,
  },
  miniPlane: {
    width: wp(53),
    height: hp(33),
  },
});

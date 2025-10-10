import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { hp, wp, sp } from 'src/utils/scaling';

export const styles = StyleSheet.create({
  bottomBarWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingVertical: hp(10),
    paddingHorizontal: wp(10),
  },
  ringsCollectedLine: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: hp(15),
  },
  ringsCollectedText: {
    fontSize: sp(20),
  },
  ringsCountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: wp(8),
    paddingHorizontal: wp(10),
    paddingVertical: hp(10),
    borderRadius: 20,
  },
  ringIcon: {
    width: wp(33),
    height: hp(33),
  },
  ringsCountText: {
    fontSize: sp(14),
    color: COLORS.Black,
  },
  fuelContainer: {
    width: '100%',
    alignItems: 'stretch',
    gap: 8,
  },
  fuelText: { fontSize: sp(18), color: COLORS.Black },
  fuelBarWrapper: {
    height: hp(36),
    paddingVertical: hp(4),
    paddingHorizontal: wp(4),
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  fuelBar: {
    height: '100%',
    borderRadius: 6,
  },
});

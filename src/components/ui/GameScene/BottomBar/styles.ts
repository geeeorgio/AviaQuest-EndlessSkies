import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';

export const styles = StyleSheet.create({
  bottomBarWrapper: {
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  ringsCollectedLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
  },
  ringsCollectedText: {
    fontSize: 20,
  },
  ringsCountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  ringIcon: {
    width: 38,
    height: 38,
  },
  ringsCountText: {
    fontSize: 15,
    color: COLORS.Black,
  },
  fuelContainer: {
    alignItems: 'stretch',
    gap: 20,
  },
  fuelText: { fontSize: 20, color: COLORS.Black },
  fuelBarWrapper: {
    height: 52,
    paddingVertical: 9,
    paddingHorizontal: 13,
    borderRadius: 12,
    overflow: 'hidden',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  fuelBar: {
    height: '100%',
    borderRadius: 6,
  },
});

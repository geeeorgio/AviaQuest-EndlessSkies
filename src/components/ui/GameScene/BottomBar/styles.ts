import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';

export const styles = StyleSheet.create({
  bottomBarWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  ringsCollectedLine: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  ringsCollectedText: {
    fontSize: 18,
  },
  ringsCountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 20,
  },
  ringIcon: {
    width: 33,
    height: 33,
  },
  ringsCountText: {
    fontSize: 14,
    color: COLORS.Black,
  },
  fuelContainer: {
    width: '100%',
    alignItems: 'stretch',
    gap: 10,
  },
  fuelText: { fontSize: 18, color: COLORS.Black },
  fuelBarWrapper: {
    height: 36,
    paddingVertical: 4,
    paddingHorizontal: 4,
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

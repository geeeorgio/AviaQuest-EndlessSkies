import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 10,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  topBar: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pauseButton: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: COLORS.Primary,
    alignItems: 'center',
    backgroundColor: COLORS.White,
  },
  pauseText: {
    fontSize: 28,
    color: COLORS.Primary,
    textAlign: 'center',
  },
  recordText: {
    fontSize: 24,
    fontFamily: FONTS.NunitoExtra,
    color: COLORS.White,
  },
  bottomBarWrapper: {
    marginBottom: 20,
    backgroundColor: COLORS.White,
    borderRadius: 8,
    padding: 15,
    borderWidth: 2,
    borderColor: COLORS.Primary,
  },
  ringsCollectedLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },

  ringsCountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: COLORS.Primary,
    backgroundColor: COLORS.White,
    paddingHorizontal: 8,
    paddingVertical: 5,
  },
  ringIcon: {
    width: 20,
    height: 20,
    marginRight: 4,
  },
  ringsCountText: {
    fontSize: 18,
    fontFamily: FONTS.NunitoExtra,
    color: COLORS.Black,
  },
  fuelContainer: {
    marginTop: 0,
  },
  fuelBarWrapper: {
    height: 25,
    borderRadius: 8,
    overflow: 'hidden',
    marginTop: 8,
    borderWidth: 2,
    borderColor: COLORS.Primary,
    backgroundColor: COLORS.White,
    padding: 3,
  },
  fuelBar: {
    height: '100%',
    borderRadius: 4,
  },
});

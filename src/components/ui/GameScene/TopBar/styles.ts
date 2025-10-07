import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';

export const styles = StyleSheet.create({
  topBar: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  sideContainer: {
    width: 77,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pauseButton: {
    width: 77,
    height: 77,
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: COLORS.Primary,
    alignItems: 'center',
    backgroundColor: COLORS.White,
  },
  pauseText: {
    fontSize: 33,
    color: COLORS.Primary,
    textAlign: 'center',
  },
  recordText: {
    fontSize: 24,
    fontFamily: FONTS.NunitoExtra,
    color: COLORS.White,
  },
});

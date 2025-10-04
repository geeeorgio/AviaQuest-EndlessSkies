import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';

export const styles = StyleSheet.create({
  mainWrapper: {
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingVertical: 15,
  },
  label: {
    fontSize: 24,
    fontFamily: FONTS.NunitoExtra,
    color: COLORS.Black,
    marginRight: 25,
  },
  circlesWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  circle: {
    height: 32,
    width: 32,
    borderRadius: '100%',
    borderWidth: 3,
    borderColor: COLORS.Primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  active: {
    backgroundColor: COLORS.Primary,
  },
  option: {
    fontSize: 13,
    fontFamily: FONTS.NunitoExtra,
    color: COLORS.Black,
  },
});

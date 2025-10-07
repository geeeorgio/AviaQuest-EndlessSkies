import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';

export const styles = StyleSheet.create({
  mainWrapper: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingVertical: 15,
  },
  label: {
    fontSize: 22,
    fontFamily: FONTS.NunitoExtra,
    color: COLORS.Black,
  },
  switchesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  circlesWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  circle: {
    height: 29,
    width: 29,
    borderRadius: 16,
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

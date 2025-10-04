import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    minHeight: 80,
  },
  backButton: {
    width: 77,
    height: 77,
    padding: 0,
    backgroundColor: COLORS.White,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: COLORS.Primary,
  },
  emptySpace: {
    width: 77,
    height: 77,
  },
  titleWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  blue: {
    justifyContent: 'center',
    backgroundColor: COLORS.Primary,
    borderColor: 'transparent',
    borderWidth: 0,
    paddingHorizontal: 25,
  },
  red: {
    justifyContent: 'center',
    backgroundColor: COLORS.Secondary,
    borderColor: 'transparent',
    borderWidth: 0,
    paddingHorizontal: 30,
  },
  text: {
    color: COLORS.White,
    fontSize: 24,
    fontFamily: FONTS.Main,
  },
});

import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';

export const styles = StyleSheet.create({
  container: { marginTop: 70, gap: 15 },
  section: {
    width: '100%',
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  resetBtn: {
    backgroundColor: COLORS.Red,
    borderWidth: 3,
    borderColor: COLORS.Primary,
    borderRadius: 20,
    paddingVertical: 20,
  },
  resetText: {
    fontSize: 22,
    fontFamily: FONTS.NunitoExtra,
    color: COLORS.White,
    textAlign: 'center',
  },
});

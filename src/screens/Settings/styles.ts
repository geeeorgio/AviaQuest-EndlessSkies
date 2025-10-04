import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';

export const styles = StyleSheet.create({
  container: { marginTop: 105 },
  section: {
    marginBottom: 10,
    width: '100%',
  },
  resetBtn: {
    marginTop: 20,
    backgroundColor: COLORS.Red,
    borderWidth: 3,
    borderColor: COLORS.Primary,
    borderRadius: 15,
    paddingVertical: 30,
  },
  resetText: {
    fontSize: 24,
    fontFamily: FONTS.NunitoExtra,
    color: COLORS.White,
    textAlign: 'center',
  },
});

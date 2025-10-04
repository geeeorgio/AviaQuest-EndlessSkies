import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';

export const styles = StyleSheet.create({
  scrollContent: {
    marginTop: 88,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingHorizontal: 7,
  },
  logoContainer: {
    width: 212,
    height: 204,
    marginBottom: 37,
  },
  mainPlane: {
    width: '100%',
    height: '100%',
  },
  rulesList: {
    width: '100%',
    alignItems: 'flex-start',
    gap: 20,
  },
  ruleText: {
    fontFamily: FONTS.NunitoExtra,
    fontSize: 16,
    textAlign: 'left',
    textTransform: 'uppercase',
    color: COLORS.White,
  },
});

import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';

export const styles = StyleSheet.create({
  scrollContent: {
    marginTop: 30,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  logoContainer: {
    width: 200,
    height: 180,
    marginBottom: 30,
  },
  mainPlane: {
    width: '100%',
    height: '100%',
  },
  rulesList: {
    width: '100%',
    alignItems: 'flex-start',
    gap: 10,
  },
  ruleText: {
    fontFamily: FONTS.NunitoExtra,
    fontSize: 15,
    textAlign: 'left',
    textTransform: 'uppercase',
    color: COLORS.White,
  },
});

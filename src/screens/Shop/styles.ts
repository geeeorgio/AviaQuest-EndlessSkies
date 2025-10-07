import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';

export const styles = StyleSheet.create({
  headerBody: { marginTop: 22 },
  ringsCounter: {
    width: '33%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 7,
    marginBottom: 22,
  },
  ring: { width: 38, height: 38 },
  ringsText: {
    fontSize: 15,
    color: COLORS.Black,
  },
});

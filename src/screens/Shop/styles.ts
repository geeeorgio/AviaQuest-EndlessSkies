import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';

export const styles = StyleSheet.create({
  headerBody: { marginTop: 15 },
  ringsCounter: {
    width: '33%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    marginBottom: 15,
    paddingVertical: 12,
    paddingHorizontal: 12,
  },
  ring: { width: 33, height: 33 },
  ringsText: {
    fontSize: 14,
    color: COLORS.Black,
  },
});

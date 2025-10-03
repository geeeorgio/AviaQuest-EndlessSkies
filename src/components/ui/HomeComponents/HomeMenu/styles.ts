import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';

export const styles = StyleSheet.create({
  menuButtons: {
    gap: 15,
    marginBottom: 54,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 15,
  },
  btn: { paddingVertical: 22, minWidth: 0 },
  buttonText: {
    fontSize: 24,
    color: COLORS.White,
  },
});

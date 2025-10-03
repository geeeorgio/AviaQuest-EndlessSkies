import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';

export const styles = StyleSheet.create({
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnPressed: {
    opacity: 0.8,
  },
  btnDisabled: {
    opacity: 0.5,
  },
  prime: {
    backgroundColor: COLORS.Primary,
    borderRadius: 20,
  },
  secondary: {
    backgroundColor: COLORS.Secondary,
    borderRadius: 20,
  },
});

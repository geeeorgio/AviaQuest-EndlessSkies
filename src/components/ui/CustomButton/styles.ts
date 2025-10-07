import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';

export const styles = StyleSheet.create({
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  btnPressed: {
    opacity: 0.8,
  },
  white: { backgroundColor: COLORS.White },
  prime: {
    backgroundColor: COLORS.Primary,
  },
  secondary: {
    backgroundColor: COLORS.Secondary,
  },
});

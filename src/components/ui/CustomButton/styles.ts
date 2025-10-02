import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants/colors';

export const styles = StyleSheet.create({
  btn: {
    justifyContent: 'center',
    alignItems: 'center',

    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.44,
    shadowRadius: 5.27,

    elevation: 12,
  },
  btnPressed: {
    opacity: 0.8,
  },
  btnDisabled: {
    opacity: 0.5,
  },
  prime: {
    backgroundColor: COLORS.Primary,
    borderRadius: 15,
  },
  secondary: {
    backgroundColor: COLORS.Secondary,
    borderRadius: 15,
  },
});

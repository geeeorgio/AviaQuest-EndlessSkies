import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.White,
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: COLORS.Primary,
    borderWidth: 3,
  },
});

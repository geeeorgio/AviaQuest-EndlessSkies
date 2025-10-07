import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';

export const styles = StyleSheet.create({
  headerBody: { marginTop: 28 },
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 22,
    paddingHorizontal: 15,
  },
  currentVehicle: {
    maxHeight: 40,
    maxWidth: 80,
    aspectRatio: 1,
  },
  text: {
    fontSize: 23,
    color: COLORS.Black,
  },
});

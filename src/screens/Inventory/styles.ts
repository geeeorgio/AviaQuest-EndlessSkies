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
    gap: 20,
  },
  currentVehicle: {
    flex: 0.5,
    maxHeight: 50,
    maxWidth: 100,
    aspectRatio: 1,
  },
  text: {
    flex: 1,
    fontSize: 24,
    color: COLORS.Black,
  },
});

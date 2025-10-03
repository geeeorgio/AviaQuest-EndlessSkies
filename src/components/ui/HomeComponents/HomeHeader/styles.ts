import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';

export const styles = StyleSheet.create({
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 70,
    marginTop: 10,
  },
  container: {
    flex: 1,
    minWidth: 0,
    flexDirection: 'row',
    gap: 7,
  },
  ringIcon: {
    width: 37,
    height: 38,
  },
  ringText: {
    textAlign: 'center',
    fontSize: 15,
    color: COLORS.Black,
  },
  miniPlane: {
    width: 58,
    height: 38,
  },
});

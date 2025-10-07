import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';

export const styles = StyleSheet.create({
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 55,
    marginTop: 10,
    marginBottom: 17,
  },
  container: {
    flex: 1,
    minWidth: 0,
    flexDirection: 'row',
    gap: 7,
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  ringIcon: {
    width: 33,
    height: 33,
  },
  ringText: {
    textAlign: 'center',
    fontSize: 15,
    color: COLORS.Black,
  },
  miniPlane: {
    width: 53,
    height: 33,
  },
});

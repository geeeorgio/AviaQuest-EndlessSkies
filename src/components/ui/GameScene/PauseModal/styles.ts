import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';

export const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 20,
  },
  modalContainer: {
    width: '80%',
    backgroundColor: COLORS.White,
    borderRadius: 15,
    padding: 30,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  ringsInfo: {
    marginBottom: 30,
    alignItems: 'center',
  },
  ringsCount: {
    fontSize: 36,
    fontWeight: 'bold',
    color: COLORS.Primary,
    marginTop: 5,
  },
  button: {
    width: '100%',
    marginVertical: 8,
  },
  buttonText: {
    color: COLORS.White,
    fontWeight: 'bold',
  },
});

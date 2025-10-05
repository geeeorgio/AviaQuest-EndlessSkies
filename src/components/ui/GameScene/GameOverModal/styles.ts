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
  modalContent: {
    width: '80%',
    padding: 30,
    borderRadius: 15,
    backgroundColor: COLORS.White,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: COLORS.Red,
    marginBottom: 20,
  },
  scoreContainer: {
    alignItems: 'center',
    marginBottom: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.Primary,
    width: '100%',
  },
  scoreLabel: {
    fontSize: 16,
    color: COLORS.Black,
    marginBottom: 5,
  },
  scoreValue: {
    fontSize: 30,
    fontWeight: '900',
    color: COLORS.Red,
  },
  ringsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 10,
  },
  ringIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  ringsValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.Secondary,
  },
  button: {
    width: '100%',
    paddingVertical: 12,
    marginTop: 15,
    borderRadius: 10,
    backgroundColor: COLORS.Primary,
  },
  menuButton: {
    backgroundColor: COLORS.Secondary,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.White,
    textAlign: 'center',
  },
});

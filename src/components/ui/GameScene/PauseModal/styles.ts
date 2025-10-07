import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    zIndex: 20,
  },
  headerWrapper: {
    width: '80%',
    marginBottom: 20,
    paddingTop: 130,
  },
  headerContainer: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  headerIconsOverlay: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  planeIcon: {
    width: 126,
    height: 70,
  },
  fuelIcon: { width: 98, height: 98 },
  headerTitle: {
    fontSize: 36,
    color: COLORS.Black,
  },
  modalContent: {
    width: '96%',
    maxWidth: 400,
    paddingVertical: 30,
    alignItems: 'center',
  },
  ringsTexts: {
    fontSize: 20,
    marginBottom: 13,
  },
  ringsInfo: {
    marginBottom: 32,
    alignItems: 'center',
  },
  ringsCountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  ringIcon: {
    width: 38,
    height: 38,
  },
  ringsValueText: {
    fontSize: 15,
  },
  btnContainer: {
    width: '100%',
    paddingHorizontal: 77,
    alignItems: 'center',
    gap: 15,
  },
  button: {
    width: '100%',
    paddingVertical: 22,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 24,
    color: COLORS.White,
    textAlign: 'center',
  },
  continueButton: {},
  backHomeButton: {},
});

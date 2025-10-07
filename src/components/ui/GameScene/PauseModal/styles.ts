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
    paddingTop: 110,
  },
  headerContainer: {
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 10,
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
    fontSize: 30,
    color: COLORS.Black,
  },
  modalContent: {
    width: '95%',
    maxWidth: 350,
    paddingVertical: 30,
    alignItems: 'center',
  },
  ringsTexts: {
    fontSize: 20,
    marginBottom: 12,
  },
  ringsInfo: {
    marginBottom: 30,
    alignItems: 'center',
  },
  ringsCountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  ringIcon: {
    width: 33,
    height: 33,
  },
  ringsValueText: {
    fontSize: 14,
  },
  btnContainer: {
    width: '100%',
    paddingHorizontal: '20%',
    alignItems: 'center',
    gap: 14,
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

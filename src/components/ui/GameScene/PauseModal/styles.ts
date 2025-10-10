import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { hp, sp, wp } from 'src/utils/scaling';

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    zIndex: 20,
  },
  headerWrapper: {
    width: '80%',
    marginBottom: hp(20),
    paddingTop: hp(110),
  },
  headerContainer: {
    width: '100%',
    paddingHorizontal: wp(16),
    paddingVertical: hp(10),
  },
  headerIconsOverlay: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  planeIcon: {
    width: wp(126),
    height: hp(70),
  },
  fuelIcon: { width: wp(98), height: hp(98) },
  headerTitle: {
    fontSize: sp(30),
    color: COLORS.Black,
  },
  modalContent: {
    width: '95%',
    maxWidth: wp(350),
    paddingVertical: hp(30),
    alignItems: 'center',
  },
  ringsTexts: {
    fontSize: sp(20),
    marginBottom: hp(12),
  },
  ringsInfo: {
    marginBottom: hp(30),
    alignItems: 'center',
  },
  ringsCountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  ringIcon: {
    width: wp(33),
    height: hp(33),
  },
  ringsValueText: {
    fontSize: sp(14),
  },
  btnContainer: {
    width: '100%',
    paddingHorizontal: '20%',
    alignItems: 'center',
    gap: 14,
  },
  button: {
    width: '100%',
    paddingVertical: hp(22),
    borderRadius: 20,
  },
  buttonText: {
    fontSize: sp(24),
    color: COLORS.White,
    textAlign: 'center',
  },
  continueButton: {},
  backHomeButton: {},
});

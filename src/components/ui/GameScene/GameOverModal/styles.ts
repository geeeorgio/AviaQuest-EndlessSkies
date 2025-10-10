import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { hp, sp, wp } from 'src/utils/scaling';

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '70%',
    paddingHorizontal: wp(10),
    paddingVertical: hp(10),
    marginBottom: hp(20),
  },
  headerTitle: {
    fontSize: sp(30),
    color: COLORS.Black,
  },
  modalContent: {
    width: '95%',
    maxWidth: wp(350),
    paddingVertical: hp(30),
    paddingHorizontal: 0,
    alignItems: 'center',
  },
  reasonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  reasonIcon: {
    width: wp(40),
    height: hp(40),
  },
  flippedReasonIcon: {
    transform: [{ scaleX: -1 }],
  },
  reasonText: {
    fontSize: sp(20),
    color: COLORS.Black,
    textAlign: 'center',
  },
  ringsContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: hp(10),
    paddingHorizontal: wp(16),
  },
  ringsLabel: {
    fontSize: sp(16),
    color: COLORS.Black,
  },
  collected: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
    paddingHorizontal: wp(10),
    paddingVertical: hp(14),
  },
  ringIcon: {
    width: wp(33),
    height: hp(33),
  },
  ringsValue: {
    fontSize: sp(14),
    color: COLORS.Black,
  },
  btnContainer: {
    width: '100%',
    paddingHorizontal: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  button: {
    width: '100%',
    paddingVertical: hp(16),
  },
  shareButton: {},
  buttonText: {
    fontSize: sp(20),
    color: COLORS.White,
    textAlign: 'center',
  },
});

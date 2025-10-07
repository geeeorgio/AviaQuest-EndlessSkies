import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';

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
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 30,
    color: COLORS.Black,
  },
  modalContent: {
    width: '95%',
    maxWidth: 350,
    paddingVertical: 30,
    paddingHorizontal: 0,
    alignItems: 'center',
  },
  reasonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  reasonIcon: {
    width: 40,
    height: 40,
  },
  flippedReasonIcon: {
    transform: [{ scaleX: -1 }],
  },
  reasonText: {
    fontSize: 20,
    color: COLORS.Black,
    textAlign: 'center',
  },
  ringsContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
    paddingHorizontal: 16,
  },
  ringsLabel: {
    fontSize: 16,
    color: COLORS.Black,
  },
  collected: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
    paddingHorizontal: 10,
    paddingVertical: 14,
  },
  ringIcon: {
    width: 33,
    height: 33,
  },
  ringsValue: {
    fontSize: 14,
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
    paddingVertical: 16,
  },
  shareButton: {},
  buttonText: {
    fontSize: 20,
    color: COLORS.White,
    textAlign: 'center',
  },
});

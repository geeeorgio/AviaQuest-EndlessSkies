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
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 20,
  },
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
  reasonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  reasonIcon: {
    width: 44,
    height: 44,
    marginRight: 8,
  },
  reasonText: {
    fontSize: 24,
    color: COLORS.Black,
    textAlign: 'center',
  },
  ringsContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: 15,
  },
  ringsLabel: {
    fontSize: 20,
    color: COLORS.Black,
  },
  collected: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
  },
  ringIcon: {
    width: 38,
    height: 38,
  },
  ringsValue: {
    fontSize: 15,
    color: COLORS.Black,
  },
  btnContainer: { width: '100%', paddingHorizontal: 50 },
  button: {
    width: '100%',
    paddingVertical: 22,
    marginVertical: 8,
  },
  shareButton: {},
  buttonText: {
    fontSize: 24,
    color: COLORS.White,
    textAlign: 'center',
  },
});

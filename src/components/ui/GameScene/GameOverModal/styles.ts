import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 20,
    paddingTop: 80,
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
    width: '95%',
    paddingHorizontal: 20,
    paddingVertical: 30,
    alignItems: 'center',
  },
  reasonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  reasonIcon: {
    width: 44,
    height: 44,
    marginRight: 8,
  },
  reasonText: {
    fontSize: 24,
    color: COLORS.Black,
  },
  ringsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    marginVertical: 15,
  },
  ringsLabel: {
    fontSize: 20,
    color: COLORS.Black,
  },
  ringIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  ringsValue: {
    fontSize: 15,
    color: COLORS.Black,
  },
  collected: { flexDirection: 'row' },
  btnContainer: { width: '100%', paddingHorizontal: 50 },
  button: {
    width: '100%',
    paddingVertical: 22,
    marginVertical: 8,
    backgroundColor: COLORS.Primary,
  },
  shareButton: {
    backgroundColor: COLORS.Secondary,
  },
  buttonText: {
    fontSize: 18,
    color: COLORS.White,
    textAlign: 'center',
  },
});

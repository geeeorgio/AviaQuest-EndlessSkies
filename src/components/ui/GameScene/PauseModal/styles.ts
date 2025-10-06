import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    zIndex: 20,
    paddingTop: 100,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 12,
    marginBottom: 20,
    backgroundColor: COLORS.White,
    borderWidth: 3,
    borderColor: COLORS.Primary,
  },
  headerIcon: {
    width: 60,
    height: 30,
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 28,
    fontFamily: FONTS.NunitoExtra,
    color: COLORS.Black,
  },
  modalContent: {
    width: '95%',
    backgroundColor: COLORS.White,
    borderRadius: 15,
    padding: 30,
    alignItems: 'center',
    borderWidth: 3,
    borderColor: COLORS.Primary,
  },
  ringsInfo: {
    marginBottom: 40,
    alignItems: 'center',
  },
  ringsCountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: COLORS.Primary,
    backgroundColor: COLORS.White,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginTop: 15,
  },
  ringIcon: {
    width: 30,
    height: 30,
    marginRight: 6,
  },
  ringsValueText: {
    fontSize: 24,
    color: COLORS.Black,
    fontFamily: FONTS.NunitoExtra,
  },
  btnContainer: {
    width: '100%',
  },
  button: {
    width: '100%',
    paddingVertical: 20,
    marginVertical: 8,
    borderRadius: 12,
  },
  buttonText: {
    fontSize: 18,
    color: COLORS.White,
    fontWeight: 'bold',
    fontFamily: FONTS.NunitoExtra,
    textAlign: 'center',
  },
  continueButton: {
    backgroundColor: COLORS.Primary,
  },
  backHomeButton: {
    backgroundColor: COLORS.Primary,
  },
});

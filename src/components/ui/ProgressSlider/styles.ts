import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from 'src/constants';

const THUMB_SIZE = 32;

export const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    alignItems: 'flex-start',
    paddingTop: 25,
    paddingBottom: 35,
  },
  label: {
    fontSize: 24,
    fontFamily: FONTS.NunitoExtra,
    color: COLORS.Black,
    marginBottom: 21,
  },
  trackWrapper: {
    width: '100%',
    height: 15,
    borderRadius: 13,
    borderWidth: 3,
    borderColor: COLORS.Primary,
    justifyContent: 'center',
  },
  filledTrack: {
    position: 'absolute',
    left: 0,
    top: 0,
    height: '100%',
    backgroundColor: COLORS.Primary,
    zIndex: 1,
  },
  customThumb: {
    position: 'absolute',
    height: THUMB_SIZE,
    width: THUMB_SIZE,
    borderRadius: THUMB_SIZE / 2,
    backgroundColor: COLORS.Primary,
    top: -((THUMB_SIZE - 10) / 2),
    left: -THUMB_SIZE / 2,
  },
  slider: {
    width: '100%',
    height: THUMB_SIZE * 2,
    zIndex: 10,
    marginTop: -((THUMB_SIZE * 2) / 2) + 66 / 2,
    marginHorizontal: 4,
  },
  value: {
    marginTop: 8,
    fontSize: 15,
    alignSelf: 'center',
    fontFamily: FONTS.NunitoExtra,
    color: COLORS.Black,
  },
});

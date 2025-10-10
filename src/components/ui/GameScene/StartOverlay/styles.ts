import { StyleSheet } from 'react-native';

import { COLORS } from 'src/constants';
import { hp, sp, wp } from 'src/utils/scaling';

export const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  blur: {
    width: '100%',
    paddingVertical: hp(25),
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: sp(33),
    color: COLORS.White,
    textAlign: 'center',
  },
  handIcon: {
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: wp(60),
    height: wp(60),
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderRadius: wp(30),
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.7)',
  },
});

import { StyleSheet } from 'react-native';

import { PLANE_HEIGHT, PLANE_WIDTH } from 'src/constants/loaderConfig';
import { hp, wp } from 'src/utils/scaling';

export const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    zIndex: 999,
  },
  planeWrapper: {
    height: PLANE_HEIGHT,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  plane: {
    width: wp(PLANE_WIDTH),
    height: hp(PLANE_HEIGHT),
  },
});
